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
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";
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

    // Prepare data for the chart
     const chartData = {
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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stress Data</Text>
            <LineChart
                data={chartData}
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
});

export default StressDataScreen;

