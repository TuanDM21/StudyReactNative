import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='your todo' />
        <Button title="Add todo" />
      </View>
      <View>
        <Text content='Todo 1' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: 'black',
  },
});
