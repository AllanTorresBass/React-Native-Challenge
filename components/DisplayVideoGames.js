import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import {Button,Image} from "react-native-elements";

export const DisplayVideoGames = ({VideoGames}) => {
  let tam = VideoGames.length;
  return (
    
       
      <ScrollView style={{width:'100%'}}>
          {
   
           VideoGames.slice(0,9).map((e,i)=>{
        
          return( 
            <Button
            title={<CustomGame name={e.name} i={i}/>}          
            buttonStyle={styles.button}
            onPress={() =>
              navigation.navigate('Hvac')
            }   
            key={i} 
    />
            )
          })          
          }
        </ScrollView>  
   
  )
}
const CustomGame = ({name,i}) => {
  return (
    <View style={{ 
      flex:1,
      flexDirection:'row',
      // paddingRight:10,
      backgroundColor:'transparent',  
      width:'100%'    
  }}>
       <View style={{backgroundColor:'transparent',width:'50%' }}>
          <Text style={styles.letterButton}>{name}</Text>
       </View>
       <View style={{backgroundColor:'transparent',width:'50%',height:93,left:0}}>  
       {/* <Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/86e/86e4ab903e6352fc1c2451a1402a0ad1.jpg'}} />   */}
{           
  i===0?( <Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg'}} />)
 :i===1?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg'}} /> )
 :i===2?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg'}} />)
 :i===3?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg'}} />)
 :i===4?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg'}} />)
 :i===5?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }}  source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/44c/44c688a8122f4e31cf85c219ab790075.jpg'}} />)
 :i===6?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg'}} />)
 :i===7?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg'}} />)
 :i===8?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg'}} />)
 :i===9?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg'}} />)
 :i===10?(<Image style={{width:100,height:100,right:0,borderRadius: 10, }} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/86e/86e4ab903e6352fc1c2451a1402a0ad1.jpg'}} />)
 :<></>
      }
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
  letterButton:{
  
    color:'white',
    fontSize: 30,
  marginTop:'9%',
    letterSpacing: -0.24,
     height:50, width: '100%',
  },
});
