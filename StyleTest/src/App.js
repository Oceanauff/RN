import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Contents, Footer } from './component/Layout';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Contents />
            <Footer />
        </View>
    );
};



export default App;