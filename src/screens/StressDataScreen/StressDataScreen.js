import React, { useState, useEffect } from 'react';
import {ScrollView, Image, View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart, PieChart, BarChart} from "react-native-chart-kit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Logo from '../../../assets/images/Logo.png';
import CustomButton from '../../components/CustomButton';

const StressDataScreen = ({ navigation }) => {
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
             labels: Object.keys(dataInControlAndChange).map(dateString => {
                 const date = new Date(dateString);
                 return `${date.getMonth()+1}/${date.getDate()+1}`;
             }),
             datasets: [
                 {
                     data: Object.values(dataInControlAndChange).map(log => log.InControl),
                     color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                 },
             ],
     };

    const feelings = {
     data: Object.values(data).slice(-7).map(log => log.feeling),
    };

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

       const triggers = {
        data: Object.values(data).slice(-7).map(log => log.triggers),
       };

       const triggerFrequencyMap = new Map();
       triggers.data.forEach(item => {
           if (triggerFrequencyMap.has(item)) {
               triggerFrequencyMap.set(item, triggerFrequencyMap.get(item) + 1);
           } else {
               triggerFrequencyMap.set(item, 1);
           }
       });

       const getFrequencyOfTrigger = (trigger) => {
           let freq = 0;
           if (triggerFrequencyMap.has(trigger)) {
               freq = triggerFrequencyMap.get(trigger);
           }
           return Math.round((freq / 7) * 100);
       };
       const pieChartData1 = [
           {
               name: 'Home',
               population: getFrequencyOfTrigger('Home'),
               color: '#ec8c90',
               legendFontColor: 'black',
               legendFontSize: 15,
           },
           {
               name: 'Work',
               population: getFrequencyOfTrigger('Work'),
               color: '#ebf2b3',
               legendFontColor: 'black',
               legendFontSize: 15,
           },
           {
               name: 'School',
               population: getFrequencyOfTrigger('School'),
               color: '#7ad3a2',
               legendFontColor: 'black',
               legendFontSize: 15,
           },
           {
               name: 'Social Life',
               population: getFrequencyOfTrigger('Social Life'),
               color: '#003366',
               legendFontColor: 'black',
               legendFontSize: 15,
           },

       ];

       const signs = {
            data: Object.values(data).slice(-7).map(log => log.signs),
        };

       const signsFrequencyMap = new Map();
        signs.data.forEach(item => {
            if(signsFrequencyMap.has(item)){
                signsFrequencyMap.set(item, signsFrequencyMap.get(item) +1);
            } else {
                signsFrequencyMap.set(item, 1);
            }
        })

        const getFrequencyOfSign = sign => {
            let freq = 0;
            if (signsFrequencyMap.has(sign)){
                freq = signsFrequencyMap.get(sign);
            }
            return Math.round((freq/7)*100);
        }
        const signPieChartData = [
            {
                name: 'Body',
                population: getFrequencyOfSign('Body'),
                color: '#df7a84',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Mind',
                population: getFrequencyOfSign('Mind'),
                color: '#f8806f',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Emotion',
                population: getFrequencyOfSign('Emotion'),
                color: '#d46766',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Behavior',
                population:getFrequencyOfSign('Behavior'),
                color: '#a44c5f',
                legendFontColor: 'black',
                legendFontSize: 15,
            }
        ];

        const strategies = {
            data: Object.values(data).slice(-7).map(log => log.strategies),
        };

        const strategyFrequencyMap = new Map();
        strategies.data.forEach(item => {
            if(strategyFrequencyMap.has(item)){
                strategyFrequencyMap.set(item, strategyFrequencyMap.get(item) + 1);
            } else {
                strategyFrequencyMap.set(item, 1);
            }
        });

        const getFrequencyOfStrategy = (strategy) => {
            let freq = 0;
            if (strategyFrequencyMap.has(strategy)) {
                freq = strategyFrequencyMap.get(strategy);
            }
            return Math.round((freq / 7) * 100);
        };

        const strategyPieChartData = [
            {
                name: 'Breathing',
                population: getFrequencyOfStrategy('Breathing '),
                color: '#7ad3a2',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Positive talk',
                population: getFrequencyOfStrategy('Positive self-talk '),
                color: '#baeccf',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Listen to music',
                population: getFrequencyOfStrategy('Listening to music '),
                color: '#ebf2b3',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Talk to friends',
                population: getFrequencyOfStrategy('Talking to a friend '),
                color: '#ebc483',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
            {
                name: 'Group Support',
                population: getFrequencyOfStrategy('Group Support '),
                color: '#ec8c90',
                legendFontColor: 'black',
                legendFontSize: 15,
            },
        ];

    return (
    <View style={styles.root}>
         <ScrollView contentContainerStyle={styles.scrollViewContainer}>
             <View style={styles.header}>
                 <View style={{width: 100}}>
                     <CustomButton text="<" onPress={() => navigation.goBack()} type="blackBackButton"/>
                 </View>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                     <View style={{ marginRight: 100 }}>
                         <Image source={Logo} style={styles.logo} resizeMode="cover" />
                     </View>
                 </View>
             </View>
            <View style={styles.container}>
            <Text style={styles.title}>Intention To Change</Text>
                <BarChart
                    data={barChartDataIntention}
                    width={Dimensions.get("window").width}
                    height={220}
                    yAxisLabel=""
                    chartConfig={{
                        fromZero: true,
                        backgroundColor: "#ecf2f5",
                        backgroundGradientFrom: "#ecf2f5",
                        backgroundGradientTo: "#ecf2f5",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        }}
                />
            <Text style={styles.title}>In Control</Text>
                <BarChart
                    data={barChartDataInControl}
                    width={Dimensions.get("window").width}
                    height={220}
                    yAxisLabel=""
                    chartConfig={{
                        fromZero: true,
                        backgroundColor: "#ecf2f5",
                        backgroundGradientFrom: "#ecf2f5",
                        backgroundGradientTo: "#ecf2f5",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        }}
                 />
            <Text style={styles.title}>Triggers</Text>
                <PieChart
                    data={pieChartData1}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                   }}
                   backgroundColor="#ecf2f5"
                   accessor="population"
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
                        backgroundColor: "#ecf2f5",
                        backgroundGradientFrom: "#ecf2f5",
                        backgroundGradientTo: "#ecf2f5",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(69, 127, 157, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#457F9D"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
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
                   style={{
                        marginVertical: 8,
                        borderRadius: 16,
                   }}
                />

                <Text style={styles.title}>Signs</Text>
                <PieChart
                    data={signPieChartData}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                   }}
                   backgroundColor="#ecf2f5"
                   accessor="population"
                   style={{
                        marginVertical: 8,
                        borderRadius: 16,
                   }}
                />

                <Text style={styles.title}>Strategies</Text>
                <PieChart
                    data={strategyPieChartData}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                   }}
                   backgroundColor="#ecf2f5"
                   accessor="population"
                   style={{
                      marginVertical: 8,
                      borderRadius: 16,
                   }}
                />

            </View>
         </ScrollView>
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
        color: 'black',
    },
    logo: {
          maxWidth: 75,
          maxHeight: 75,
          marginVertical: 10,
    },
   header:{
      width: '100%',
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
  headerForText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
   },
   root: {
      flex: 1,
      backgroundColor: '#FFF7F5',
    },

});

export default StressDataScreen;

