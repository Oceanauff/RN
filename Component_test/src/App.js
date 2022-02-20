import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Btn from './component/btn';

const App = () => {
    const name = 'SeonWoo';
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {(() => {
                    if(name === 'SeonWoo') return 'KIM';
                    else return 'NO';
                })()}
            </Text>
            <Btn/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
});

export default App;