import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {Button,Image} from "react-native-elements";
// import {VideoGames} from '../json/GetVideoGame'
import {LinkTrailer} from '../json/LinkTrailers'

export default function VideoX({setRender,link}) {
  const video = React.useRef(null);
   
  const [status, setStatus] = React.useState({});
 console.log(link)
 
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
    </View>
  );
}
const styles = StyleSheet.create({ container: {
  flex: 1,
  
  alignItems: 'center',
  justifyContent: 'center',
  top:10,
   
}, 
video:{
 borderWidth:1,
 
 height:300,
 width:450

},
buttons:{
  height:50,
  flex:1,
  flexDirection:'row'
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