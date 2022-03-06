import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//1) Set up redux
//2)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test RN with build at uber clone</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
