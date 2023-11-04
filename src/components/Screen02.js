import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

export default function Screen02({navigation}) {
    var [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f48b09e8bd3be29e028fd.mockapi.io/week07')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
    }, []);

  return  <View style={{flex:1}}>
      <View style = {{width:'100%', height:40, marginTop:10, flexDirection:'row', display:'flex', alignItems:'center'}}>
            <FontAwesome name="angle-left" size={25} style={{margin:30}}/>

            <Text style={{fontSize: 24, fontWeight:'bold'}}>Shops Near Me</Text>

            <FontAwesome name="search" size={25} style={{marginLeft:70, color:'green'}}/>

      </View>
  {
    data.map((item) =>{
        return(
                <Pressable style = {styles.item}
                onPress={() => {
                  navigation.navigate('Screen03')
                }}
                >
                    <Image 
                        source = {{uri: item.imgUrl}}
                        style = {{width:'100%', height:'100px', alignSelf:'center'}}
                    />

                    <View style = {{marginLeft:10, fontSize:15}}>
                        <View style = {{flexDirection:'row', marginTop:12, marginBottom:5, alignItems:'center'}}>
                            {item.status.toString() == 'true'?<Text style={{color:'green'}}><Feather name="check" size={20}/> Accepting Orders</Text>:<Text style={{color:'red'}}><Fontisto name="locked" size={20}/>  Tempory Unavailable</Text>}
                            <Text style={{marginLeft:20, color:'red'}}><Feather name="clock" size={20} style={{color:'green'}}/>  {item.minute}</Text>
                        </View>      
                        <Text style={{fontSize:20, fontWeight:'bold', marginBottom:3}}>{item.cafeName}</Text>
                        <Text>{item.address}</Text>    
                    </View>                            

                </Pressable>                              
        )
    })
  }
  </View>

  
}

const styles = StyleSheet.create({

  item:{
      width:'90%',
      height:'200px',
      border: "1px solid #C4C4C4",
      marginTop: 20,
      left:20
  }
});
