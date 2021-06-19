
import React,{useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Switch
} from 'react-native';
import Coder from './img/coder.jpg';
import Girl from './img/girl.jpg';
import HomeScreen from './components/HomeScreen';


const Stack = createStackNavigator();

function DetailScreen( {navigation} ) {
const [isEnabled,setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <View>
          <Image source={isEnabled ?  Girl: Coder} style={{width:395, height: 500}}/>
        </View>
        <View style={{marginRight:170}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "blue" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          
        />
        </View>
      </View>
      <Text>Detail Screen</Text>
      <Button title="Go back HomeScreen"
      //goBack quay lại màn hình trước đó
        onPress={ ()=> navigation.goBack()}
      />

      <Button title="Go back first screen" 
      // popToTop quay về màn hình đầu tiên khi chạy app
      // navigation.push('name') là ghi đè cùng 1 màn hình lên nhau
        onPress={ ()=> navigation.popToTop()}
      />
    </View>
  );
}

function LoginScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login Now"
      //màn hình thay thế, ví dụ login rồi k thể quay về login tiếp nữa
        onPress={ ()=> navigation.replace('Home')}
      />
    </View>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
