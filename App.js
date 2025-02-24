import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [todoList, setToDoList] = useState([])

  const [todoText, setTodoText] = useState('');

  function textInputChanged(textChange){
    setTodoText(textChange);
  }

  function addTodo(){
    setToDoList((currentTodoList) => [...currentTodoList,todoText]);
  } 

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textInputChanged} style={styles.TextInput} placeholder='your todo' />
        <Button onPress={addTodo} title="Add todo" />
      </View>
      <View style={styles.todoList}>
        {todoList.map((todo) => <Text key={todo}>{todo}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex : 1
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom : 50,
    borderBottomWidth :1,
    borderBottomColor: 'grey',
    paddingBottom : 50,
    flex : 1,
    alignItems :'center',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    marginRight: 8,
    width: '70%',
  },
  todoList: {
    flex : 4
  }
});
