import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

 export const Header = () => {
     return (
         <View style={[styles.container, styles.header]}>
             <Text style={styles.text}>Header</Text>
         </View>
     );
 };

 export const Contents = () => {
     return (
         <View style={[styles.container, styles.contents]}>
             <Text style={styles.text}>Contents</Text>
         </View>
     );
 };

 export const Footer = () => {
     return (
         <View style={[styles.container, styles.footer]}>
             <Text style={styles.text}>Footer</Text>
         </View>
     );
 };

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#f1c40f',
    },
    contents: {
        flex: 3,
        backgroundColor: '#1abc9c',
    },
    footer: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    text: {
        fontSize: 26,
    },
});