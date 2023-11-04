import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen02 from './src/components/Screen02';
import Screen01 from './src/components/Screen01';
import Screen03 from './src/components/Screen03';
import Screen04 from './src/components/Screen04';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
        <Stack.Screen name="Screen04" component={Screen04} />

      </Stack.Navigator>

    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({});
