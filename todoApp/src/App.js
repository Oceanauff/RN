import React, { useState } from 'react'; // useState : 입력되는 값을 이용할 수 있도록
import { Dimensions, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme'; 
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';

// styled.태그명`속성명 : 값, `; 태그에 대한 속성값들을 정의
const Container = styled.SafeAreaView` 
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
    `;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    align-self: flex-start;
    margin: 0px 20px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`;

export default function App () {
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState(''); //newTask : 상태변수, setNewTask : 세터함수

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask(''); // 완료버튼 클릭 시 입력된 내용을 확인하고 input컴포넌트를 초기화 함
    };

    const _handleTextChange = text => {
        setNewTask(text); // input컴포넌트에서 값이 변할 때마다 newTrack에 저장됨
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Title>TODO List</Title>
                <Input 
                    placeholder="+ Add a Task"  //input 컴포넌트로 placeholder라는 매개변수를 전달
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />
                <List width={width}>
                    <Task text="Hanbit" />
                    <Task text="React Native" />
                    <Task text="React Native Sample" />
                    <Task text="Edit TODO Item" />
                </List>
                {/* <IconButton type={images.uncompleted} />
                <IconButton type={images.completed} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} /> */}
            </Container>
        </ThemeProvider>
    );
}