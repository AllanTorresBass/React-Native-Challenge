import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import {Button,Image} from "react-native-elements";

export const DisplayVideoGames = ({VideoGames}) => {
  let tam = VideoGames.length;
  return (
    <View style={styles.container}>
        <Text>Video Games{tam}</Text>
      <ScrollView>
          {
   
           VideoGames.slice(0,9).map((e,i)=>{
          // return( <View style={styles.list} key={i}><Text>{e.name}</Text></View>)
          return( 
            <Button
            title={e.name}          
            buttonStyle={styles.button}
            onPress={() =>
              navigation.navigate('Hvac')
            }    
    />
            )
          })          
          }
        </ScrollView>  
    </View>
  )
}
const CustomTitleHVAC = () => {
  return (
    <View style={{ 
      flex:1,
      flexDirection:'row',
      // paddingRight:10,
      backgroundColor:'transparent',      
  }}>
       <View style={{backgroundColor:'transparent',width:'50%' }}>
          <Text style={styles.letterButton}>HVAC</Text>
       </View>
       <View style={{backgroundColor:'transparent',width:'50%',height:93,left:0}}>      
          {/* <Image style={{width:100,height:90,left:'38%' }} source={require('../assets/icons/summary/hvac-white.png')} /> */}
       </View>     
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  list:{
    width:'100%',
    borderColor:'black',
    borderWidth:2
  },
    
  button:{
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10,
    width: '100%',
    height: 120,
      marginTop:10,
      marginBottom:10,
      marginLeft:0,
      backgroundColor:'#1B61AA',
     
  },
  letterButton_:{
  
    color:'white',
    fontSize: 30,
  marginTop:'9%',
    letterSpacing: -0.24,
     height:50
  },
});
