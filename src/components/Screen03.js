import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Screen03() {
    var [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f48b09e8bd3be29e028fd.mockapi.io/week07screen03')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
    }, []);

  return  <View style={{flex:1}}>
      <View style = {{width:'100%', height:40, marginTop:10, flexDirection:'row', display:'flex', alignItems:'center'}}>
            <FontAwesome name="angle-left" size={25} style={{margin:30}}/>

            <Text style={{fontSize: 24, fontWeight:'bold'}}>Drinks</Text>

            <FontAwesome name="search" size={25} style={{marginLeft: 150, color:'green'}}/>

      </View>
  {
    data.map((item) =>{
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

                    <Entypo name="circle-with-minus" size={25} style={{color:'green'}}/>
                         
                    <Entypo name="circle-with-plus" size={25} style={{color:'green', left: 20}}/>

                </View>                              
        )
    })
  }
  <TouchableOpacity style={styles.btnAddCart}>
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
