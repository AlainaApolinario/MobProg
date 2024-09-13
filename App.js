import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import Signup from './screens/SignupScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions ={{
      headerShown: false,
    }}>
      
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='SignUp' component={Signup} />
    
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
