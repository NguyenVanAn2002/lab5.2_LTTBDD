import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import API_Screen1 from './Screen/API_Screen1';
import { createStackNavigator } from '@react-navigation/stack';
import API_Screen2 from './Screen/API_Screen2';
import { NavigationContainer } from '@react-navigation/native';
import API_Screen3 from './Screen/API_Screen3';


export default function App({navigation}) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="API_Screen1" component={API_Screen1}  />
        <Stack.Screen name="API_Screen2" component={API_Screen2} options={{ title: 'Shop Near Me' }} />
        <Stack.Screen name="API_Screen3" component={API_Screen3} options={{ title: 'Drinks' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

