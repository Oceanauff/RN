import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

// 이미지 종류별로 컴포넌트를 만들지 않고, IconButton컴포넌트를 호출할 때 원하는 이미지의 종류를 props에 type으로 전달함

const Icon = styled.Image`
    tint-color: ${({ theme }) => theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;
const IconButton = ({ type, onPressOut}) => {
    return(
        <Pressable onPressOut={onPressOut}>
            <Icon source={type} />
        </Pressable>
    );
};

IconButton.PropTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};

export default IconButton;