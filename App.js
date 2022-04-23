import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {VideoGames} from './json/GetVideoGame'
import {DisplayVideoGames} from './components/DisplayVideoGames'
export default function App() {
  
  
  return (
    <View style={styles.container}>
        <SafeAreaProvider>
        
           <DisplayVideoGames VideoGames={VideoGames}/>
        </SafeAreaProvider>
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
    width:'100%'
  },
});
