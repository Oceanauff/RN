import React from 'react';
import { Pressable, Text } from 'react-native';

const btn = () => {
    return (
        <Pressable style={{ backgroundColor: '#3498db', padding: 16, margin: 10, borderRadius: 8, }} onPress={() => alert('click!!')}>
            <Text style={{ color: 'white', fontSize: 24 }}>btn</Text>
            {/* testcommit */}
        </Pressable>
    )
}

export default btn;