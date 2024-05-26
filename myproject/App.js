import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is Ebenezer Borizina!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',// Change background to Teal
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20, // Increase font size to 20
  },
  boldText: {
    fontWeight: 'bold', // Make text name bold
  },
});
