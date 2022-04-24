import * as React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {Button,Image,Text,H1} from "react-native-elements";
// import {VideoGames} from '../json/GetVideoGame'
import {LinkTrailer} from '../json/LinkTrailers'
 

export default function VideoX({setRender,link,platforms,name}) {
  const video = React.useRef(null);
   
  const [status, setStatus] = React.useState({});
 console.log(platforms)
 
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: link,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button style={{ }}
        buttonStyle={styles.button}
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
           <Button style={{ }}
        buttonStyle={styles.button2}
          title={'Atras'}
          onPress={() =>
            setRender(0)
          }
        />
      </View>
      <ScrollView style={{height:100,width:'100%'}} horizontal={true}>
    <View style={{flex:1,flexDirection:'row',top:20}}>
   
     {
      platforms.map((e,i)=>{

      return(
       
           <View key={i} style={{height:50,borderColor:'white',borderWidth:2,width:150,borderRadius:10,alignItems:'center'}}>
                <Text style={{color:'white',top:10}}>{e}</Text>
            </View>
       
        )

      })

     }
    
    </View>
    </ScrollView>
    <View style={{flex:2,flexDirection:'column',top:0,width:'100%'}}>
       <Text style={{color:'white',top:0,fontSize:55, letterSpacing: -0.24,
     height:150, 
     borderBottomWidth:2,
  
    textShadowColor:'#EEA111',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,height:400}}>{name}</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({ container: {
  flex: 1,
  height:700,
  alignItems: 'center',
  justifyContent: 'center',
  top:0,
  flexDirection:'column',
  flex:1,
}, 
video:{
 borderWidth:1,
 
 height:300,
 width:450,
 
},
buttons:{
  width:200,
  flex:1,
  flexDirection:'row',
  // borderColor:'white',
  // borderWidth:2
},
button:{
  width:100,
  backgroundColor: '#EEA111',
},
button2:{
  width:100,
  backgroundColor: '#EEA111',
  left:5
}
}); 