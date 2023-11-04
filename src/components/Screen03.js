import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-web';

export default function Screen03({navigation}) {
    var [data, setData] = useState([]);
    let initialCounters = [
      0,0,0,0,0,0,0,0
    ];
    var [count, setCount] = useState(initialCounters);
  
    function handleClickPlus(index) {

      const nextCounters = count.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c + 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCount(nextCounters);
     
    }

    function handleClickMinus(index) {
      const nextCounters = count.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c - 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCount(nextCounters);
  }
  

    useEffect(() => {
        fetch('https://653f48b09e8bd3be29e028fd.mockapi.io/week07screen03')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
    }, []);

  return  <View style={{flex:1}}>
      <View style = {{width:'100%', height:40, marginTop:10, flexDirection:'row', display:'flex', alignItems:'center'}}>
            <FontAwesome name="angle-left" size={25} style={{margin:30}}
            onPress={() => {
              navigation.navigate('Screen02')
            }}
            />

            <Text style={{fontSize: 24, fontWeight:'bold'}}>Drinks</Text>

            <FontAwesome name="search" size={25} style={{marginLeft: 150, color:'green'}}/>

      </View>
  {
    data.map((item, index) =>{
        return(
                <View style = {styles.item}>

                    <Image 
                        source = {{uri: item.imgUrl}}
                        style = {{width:60, height:60}}
                    />

                    <View style={{width: 170, flexDirection:'column', marginLeft: 30}}>
                        <Text style={{top: -8, fontSize: 16, fontWeight: 500}}>{item.name}</Text>
                        <Text style={{top: 7, color:'#565E6C'}}><SimpleLineIcons name="control-play" size={15} style={{color:'#9095A0'}}/> ${item.price}</Text>
                    </View>


                    <Entypo name="circle-with-minus" size={25} style={{color:'green'}} onClick={() => handleClickMinus(index)}/>

                    <TextInput
                    style={{width: 30, height: 30, fontSize: 16, paddingLeft: 10}}  
                    value={count[index]}
                    />
              
                    <Entypo name="circle-with-plus" size={25} style={{color:'green'}} onClick={() => handleClickPlus(index)}/>


                </View>                              
        )
    })
  }
  <TouchableOpacity style={styles.btnAddCart}
      onPress={() => {
        navigation.navigate('Screen04')
      }}
  >
        <Text style={{color:'white', fontSize: 16, lineHeight: 26, fontWeight: 500}}>GO TO CART</Text>
    </TouchableOpacity>

  </View>

  
}

const styles = StyleSheet.create({

  item:{
      width:'90%',
      height:'64px',
      border: "1px solid #C4C4C4",
      marginTop: 20,
      left:20,
      flexDirection:'row',
      alignItems:'center',
      borderRadius: 7
  },

  btnAddCart:{
    width: 312, 
    height: 50, 
    top: 30, 
    backgroundColor:'#EFB034', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:10,
    left: 40,
    marginBottom: 70
}
});
