import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen01({navigation}) {
    var [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f48b09e8bd3be29e028fd.mockapi.io/week07')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
    }, []);

  return <View style={styles.container}>
        <Text style={{fontSize: 24, lineHeight: 36, fontWeight: 700, top: 50, marginBottom: 30}}>Welcome to Cafe world</Text>
    {
        data.map((item) =>{
            return(
                        <Image 
                            source = {{uri: item.imgUrl}}
                            style = {{width:'200px', height:'62px', marginTop: 70}}
                        />                                  
            )
        })
    }

    <TouchableOpacity style={styles.btnStart}
        onPress={() => {
            navigation.navigate('Screen02')
        }}
    >
        <Text style={{color:'white', fontSize: 14, lineHeight: 22, fontWeight: 400}}>GET STARTED</Text>
    </TouchableOpacity>

    </View>

  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#DEE1E6',
        alignItems:'center'
    },
    
    btnStart:{
        width: 312, 
        height: 50, 
        top: 50, 
        backgroundColor:'#00BDD6', 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:10
    }

});
