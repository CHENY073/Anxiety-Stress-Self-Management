/* import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const StressDataScreen = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const user = auth().currentUser;
    var db = firestore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('DailyLog').doc(user.uid).collection('dates').get();
                let data = {};
                snapshot.forEach(doc => {
                    data[doc.id] = doc.data();
                });
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stress Data</Text>
            {Object.entries(data).map(([date, log], index) => (
                <View key={index} style={styles.logEntry}>
                    <Text>{date}</Text>
                    <Text>Activity: {log.activity}</Text>
                    <Text>Triggers: {log.triggers}</Text>
                    <Text>Signs: {log.signs}</Text>
                    <Text>Body: {log.body}</Text>
                    <Text>Mind: {log.mind}</Text>
                    <Text>Emotion: {log.emotion}</Text>
                    <Text>Behavior: {log.behavior}</Text>
                    <Text>Stressed Level: {log.stressedLevel}</Text>
                    <Text>Strategies: {log.strategies}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF7F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logEntry: {
        width: '100%',
        padding: 10,
        borderColor: '#736468',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default StressDataScreen;
*/

import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart, PieChart, BarChart} from "react-native-chart-kit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const StressDataScreen = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [dataInControlAndChange, setDataInControlAndChange] = useState(null);

    const user = auth().currentUser;
    var db = firestore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshotDailyLog = await db.collection('DailyLog').doc(user.uid).collection('dates').get();
                let dataDailyLog = {};
                snapshotDailyLog.forEach(doc => {
                    dataDailyLog[doc.id] = doc.data();
                });
                setData(dataDailyLog);

                const snapshotInControl = await db.collection('InControlAndChange').doc(user.uid).collection('dates').get();
                let dataInControl = {};
                snapshotInControl.forEach(doc => {
                    dataInControl[doc.id] = doc.data();
                });
                setDataInControlAndChange(dataInControl);

                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Prepare data for the line chart
     const lineChartData = {
            labels: Object.keys(data).map(dateString => {
                const date = new Date(dateString);
                return `${date.getMonth() + 1}/${date.getDate()}`;
            }),
            datasets: [
                {
                    data: Object.values(data).map(log => log.stressedLevel),
                },
            ],
        };


     const barChartDataIntention = {
             labels: Object.keys(dataInControlAndChange).map(dateString => {
                 const date = new Date(dateString);
                 return `${date.getMonth()+1}/${date.getDate()+1}`;
             }),
             datasets: [
                 {
                     data: Object.values(dataInControlAndChange).map(log => log.Intention),
                     color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                 },
             ],
     };


     const barChartDataInControl = {
             labels: Object.keys(dataInControlAndChange).slice(-1).map(dateString => {
                 const date = new Date(dateString);
                 return `${date.getMonth()+1}/${date.getDate()+1}`;
             }),
             datasets: [
                 {
                     data: Object.values(dataInControlAndChange).slice(-1).map(log => log.InControl),
                     color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                 },
             ],
     };


    // Prepare data for the pie chart
     const feelings = {
         data: Object.values(data).slice(-7).map(log => log.feeling),
        };

       // creating map to find frequency of each feeling
       const feelingsFrequencyMap = new Map();
        feelings.data.forEach(item => {
            if(feelingsFrequencyMap.has(item)){
                feelingsFrequencyMap.set(item, feelingsFrequencyMap.get(item) +1);
            } else {
                feelingsFrequencyMap.set(item, 1);
            }
        })

        // creating map to map number to feeling
        const numberToFeelingData = [
            ['Angry', 0],
            ['Sad', 1],
            ['Indifferent', 2],
            ['Happy', 3],
            ['Excited', 4],
        ]
        const numberToFeeling = new Map(numberToFeelingData);

        const getFrequencyOfFeeling = feeling => {
            const num = numberToFeeling.get(feeling);
            let freq = 0;
            if (feelingsFrequencyMap.has(num)){
                freq = feelingsFrequencyMap.get(num);
            }
            return Math.round((freq/7)*100);
        }

        const pieChartData = [
            {
                name: 'Excited',
                population: getFrequencyOfFeeling('Excited'),
                color: '#7ad3a2',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Happy',
                population: getFrequencyOfFeeling('Happy'),
                color: '#baeccf',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Indifferent',
                population: getFrequencyOfFeeling('Indifferent'),
                color: '#ebf2b3',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Sad',
                population: getFrequencyOfFeeling('Sad'),
                color: '#ebc483',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Angry',
                population: getFrequencyOfFeeling('Angry'),
                color: '#ec8c90',
                legendFontColor: 'black',
                legendFontSize: 15,
            }
        ];
// Prepare data for the pie chart
const trigger = {
    data: Object.values(data).slice(-7).map(log => log.triggers),
   };

  // creating map to find frequency of each stressor
  const stressorFrequencyMap = new Map();
   feelings.data.forEach(item => {
       if(stressorFrequencyMap.has(item)){
           stressorFrequencyMap.set(item, stressorFrequencyMap.get(item) +1);
       } else {
           stressorFrequencyMap.set(item, 1);
       }
   })

   // creating map to map number to stressor
   const numberToStressorData = [
       ['Home', 0],
       ['Work', 1],
       ['School', 2],
       ['Social Life', 3],
   ]
   const numberToStressor = new Map(numberToStressorData);

   const getFrequencyOfStressor = stressor => {
       const num = numberToStressor.get(stressor);
       let freq1 = 0;
       if (stressorFrequencyMap.has(num)){
           freq1 = stressorFrequencyMap.get(num);
       }
       return Math.round((freq1/7)*100);
   }

   const pieChartData1 = [
       {
           name: 'Home',
           population: getFrequencyOfStressor('Home'),
           color: '#FF0000',
           legendFontColor: 'black',
           legendFontSize: 15,
       },
       {
           name: 'Work',
           population: getFrequencyOfStressor('Work'),
           color: '#FFFF00',
           legendFontColor: 'black',
           legendFontSize: 15,
       },
       {
           name: 'School',
           population: getFrequencyOfStressor('School'),
           color: '#00b300',
           legendFontColor: 'black',
           legendFontSize: 15,
       },
       {
           name: 'Social Life',
           population: getFrequencyOfStressor('Social Life'),
           color: '#0000b3',
           legendFontColor: 'black',
           legendFontSize: 15,
       },
      
   ];
    return (
    // TODO: insert app logo
     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
        <Text style={styles.title}>Triggers</Text>
            <PieChart
                data={pieChartData1}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
               }}
               backgroundColor="#ecf2f5"
               accessor="population"
            />
            <Text style={styles.title}>Feelings</Text>
            <PieChart
                data={pieChartData}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
               }}
               backgroundColor="#ecf2f5"
               accessor="population"
            />
            <Text style={styles.title}>In Control</Text>
            <BarChart
                data={barChartDataInControl}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel=""
                chartConfig={{
                    fromZero: true,
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#457F9D",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            <Text style={styles.title}>Intention To Change</Text>
            <BarChart
                data={barChartDataIntention}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel=""
                chartConfig={{
                    fromZero: true,
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#457F9D",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            <Text style={styles.title}>Stress Level</Text>
            <LineChart
                data={lineChartData}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=" lvl"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#457F9D",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
     </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF7F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
});

export default StressDataScreen;

