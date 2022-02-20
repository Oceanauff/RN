import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const btn = props => {
    return (
        <Pressable style={{ backgroundColor: '#3498db', padding: 16, margin: 10, borderRadius: 8, }} 
        onPress={() => props.onPress()}
        onLongPress = {() => alert('its long press')}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>{props.title}</Text>
            {/* testcommit */}
        </Pressable>
    )
}

btn.defaultProps = {
    title: '기본 타이틀 값',
    testProps: '아무값도 없다.',
};

btn.propTypes = {
    title: PropTypes.string.isRequired,
    testProps: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default btn;