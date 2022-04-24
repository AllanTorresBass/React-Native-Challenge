import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {VideoGames} from './json/GetVideoGame'
import {DisplayVideoGames} from './components/DisplayVideoGames'
import {Button,Image} from "react-native-elements";
 
export default function App() {
  
  
  return (
    <View style={styles.container}>
        <SafeAreaProvider style={{width:'90%'}}>
      
           <DisplayVideoGames VideoGames={VideoGames}/>
          
        </SafeAreaProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',height:1500
  },
});
