import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import {Button,Image} from "react-native-elements";

export const DisplayVideoGames = ({VideoGames}) => {
  let tam = VideoGames.length;
  return (
    
       
      <ScrollView style={{width:'100%',top:10}}>
          {
   
           VideoGames.slice(0,9).map((e,i)=>{
        
          return( 
            <Button
            title={<CustomGame name={e.name} i={i} genre={e.genres[0].name}/>}          
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
const CustomGame = ({name,i,genre}) => {
  return (
    <View style={{ 
      flex:1,
      flexDirection:'row',
      // paddingRight:10,
      backgroundColor:'transparent',  
      width:'100%'    
  }}>
       <View style={{backgroundColor:'transparent',width:'60%' }}>
          <Text style={styles.letterButton}>{name}</Text> 
          <Text style={styles.letterButton_}> genre: {genre}</Text>
       </View>
       
       <View style={{backgroundColor:'transparent',width:'50%',height:93,left:'50%',top:30}}>  
{           
  i===0?( <Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg'}} />)
 :i===1?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg'}} /> )
 :i===2?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg'}} />)
 :i===3?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg'}} />)
 :i===4?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg'}} />)
 :i===5?(<Image style={styles.img}  source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/44c/44c688a8122f4e31cf85c219ab790075.jpg'}} />)
 :i===6?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg'}} />)
 :i===7?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg'}} />)
 :i===8?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg'}} />)
 :i===9?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg'}} />)
 :i===10?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/86e/86e4ab903e6352fc1c2451a1402a0ad1.jpg'}} />)
 :<></>
      }
       </View>     
    </View>
  );
  };

const styles = StyleSheet.create({
  img:{width:110,height:100,right:0,borderRadius: 10, },
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
    borderWidth: 1,
    borderColor: '#EEA111',
    borderRadius: 10,
    width: '100%',
    height: 120,
      marginTop:10,
      marginBottom:10,
      marginLeft:0,
      backgroundColor:'#6C7592',
     
  },
  letterButton:{
  
    color:'white',
    fontSize:25,
  marginTop:25,
    letterSpacing: -0.24,
     height:60, width: '100%',
     borderBottomWidth:1
  },
  letterButton_:{
  
    color:'white',
    fontSize:20,
  marginTop:15,
    letterSpacing: -0.24,
     height:60, width: '100%',
     borderBottomWidth:2,
     paddingLeft:30,
    paddingRight:30,
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,

  },
});
