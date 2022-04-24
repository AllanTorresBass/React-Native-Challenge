import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import {Button,Image} from "react-native-elements";
import VideoX from './VideoX';
import { Icon } from 'react-native-elements'
import SelectDropdown from 'react-native-select-dropdown'
export const DisplayVideoGames = ({VideoGames}) => {
  // platforms
  const [platforms, setPlatforms] = React.useState('');
  const [render, setRender] = React.useState(0);
  const [link, setLink] = React.useState(0);
  const [name, setName] = React.useState(0);
  const [begin, setBegin] = React.useState(0);
  const [end, setEnd] = React.useState(3);
  const [genre, setGenre] = React.useState('');
  const dropdownRef = React.useRef({}); 
  const countries = ["Action", "Adventure", "Shooter"]
  return (
    
       
      <ScrollView style={{width:'100%',top:10}}>
        {/* Bloque #1 */}
  <View  style={{flex:1,flexDirection:'row' ,height:50,backgroundColor:'transparent',top:20}}> 
      <View style={{width:'25%',height:'25%' }} >
      
      <Image style={styles.img2} 
      source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/557/557e77792080432742bda068bf810f9a.jpg'}} /> 
      </View>
      <View style={{width:'25%',height:'25%' }} >  
      <Image style={styles.img2} 
      source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/dcd/dcdc4fed1cea552c6dfa683eec0babd2.jpg'}} />
      </View>
      <View style={{width:'25%',height:'25%' }} > 
        <Image style={styles.img2} 
      source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/2ae/2aef8f900b9a5ade7ee132e931f9c0d7.jpg'}} />
    </View>
      <View style={{width:'25%',height:'25%' }} > 
      <Image style={styles.img2} 
      source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/b76/b768ead45ed101055c711331916171a8.jpg'}} />
      </View>
    
  </View>


  
   <View style={{alignItems:'center'}}>
        <Text style={{color:'white',top:0,fontSize:55, letterSpacing: -0.24,
        height:80, 
        borderBottomWidth:2,
        left:0,
        top:-30,
        
        textShadowColor:'#EEA111',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,height:60}}>Video Games</Text>
    </View>
  {/* Block #2 */}   

{ render===0? (<View style={{flex:1,flexDirection:'row'}}>
        <SelectDropdown
          data={countries}
          ref={dropdownRef}  
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            setGenre(selectedItem);
            setBegin(0);
            setEnd(6);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          buttonStyle={{backgroundColor:'#6C7592',borderRadius:20, borderWidth: 1, borderColor: '#EEA111',}}
          buttonTextStyle={{color:'white'}}
          dropdownStyle={{color:'white',backgroundColor:'black',borderRadius:20, borderWidth: 1, borderColor: '#EEA111',}}
          rowTextStyle={{color:'white',backgroundColor:'#6C7592',borderRadius:20, borderWidth: 1, borderColor: '#EEA111',}}
        />
        {genre!=''?<Button title={'X'}
        buttonStyle={{backgroundColor:'#6C7592',borderRadius:20, borderWidth: 1, borderColor: '#EEA111',width:40,height:50,left:1}}
      
          onPress={() =>
            {  
              
                setBegin(0);
                setEnd(3);
                setGenre('');
                dropdownRef.current.reset()
            }
          
      
        } 
        />
        :<></>
      }
  </View> ):<></>  }    

    {/* ///////////////////////////////////////////////////////////////// */}
          {
   render===0?(
 VideoGames.slice(begin,end).map((e,i)=>{

       if(genre!='')if(e.genres[0].name===genre)
          {return( 

            <Button
            title={<CustomGame name={e.name} i={i} genre={e.genres[0].name} begin={begin}/>}          
            buttonStyle={styles.button}
            onPress={() =>
            { setRender(1);
              setLink(e.url);
              setPlatforms(e.platforms);
              setName(e.name);
            }
            }   
            key={i} 
            />
           
            

            
            )}
            if(genre===''){ return( 

              <Button
              title={<CustomGame name={e.name} i={i} genre={e.genres[0].name} begin={begin}/>}          
              buttonStyle={styles.button}
              onPress={() =>
              { setRender(1);
                setLink(e.url);
                setPlatforms(e.platforms);
                setName(e.name);
              }
              }   
              key={i} 
              />
             
              
  
              
              )    }




          })
          



   )
             :(
               <VideoX setRender={setRender} link={link} platforms={platforms} name={name} />
             )


          
          

         
          }

      {    
        render===0?( <View style={{flex:1,flexDirection:'row',width:'100%',alignContent:'center',}}>  
      
              <Button
                    title={'<<'}          
                    buttonStyle={styles.buttonB}
                    onPress={() =>
                    {  
                          if(begin>0){
                            setBegin(begin-3);
                              setEnd(end-3);
                          }
                    }
                    }   
                
                    /> 
                  
                  
                    <Button
                    title={'>>'}          
                    buttonStyle={styles.buttonB}
                    onPress={() =>
                    {  
                      if(end<=9){
                        setBegin(begin+3);
                        setEnd(end+3);
                      }
                    }
                    }   
                    
                    />
          </View>):<></>
    }   
        </ScrollView>  
   
  )
}
const CustomGame = ({name,i,genre,begin}) => {

  i=i+begin;
 
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
          <Text style={styles.letterButton_}> genre: {genre}</Text>
       </View>
       
       <View style={{backgroundColor:'transparent',width:'50%',height:'100%',left:'50%',top:40}}>  
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
 :i===11?(<Image style={styles.img} source={{uri :'https://media.rawg.io/media/resize/200/-/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg'}} />)
 :<></>
      }
       </View>     
    </View>
  );
  };

const styles = StyleSheet.create({
  img2:{width:'100%',height:70,left:0,borderRadius: 40,opacity: 0.8, },
  img:{width:110,height:90,left:0,borderRadius: 10 },
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
    height: 100,
      marginTop:10,
      marginBottom:10,
      marginLeft:0,
      backgroundColor:'#6C7592',
     
  },
  buttonB:{
    borderWidth: 1,
    borderColor: '#EEA111',
    borderRadius: 10,
    width: '50%',
    height: 40,
      marginTop:10,
      marginBottom:10,
      marginLeft:'22.5%',
      backgroundColor:'#6C7592',
     
  },
  letterButton:{
  
    color:'white',
    fontSize:30,
  marginTop:35,
    letterSpacing: -0.24,
     height:70, width: '100%',
     
  },
  letterButton_:{
  
    color:'white',
    fontSize:18,
  marginTop:5,
    letterSpacing: -0.24,
     height:60, width: '100%',
     borderBottomWidth:2,
  
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,

  },
});
