import React,{useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleModal from './SimpleModal';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';

function HomeScreen( {navigation} ) {
    const [chooseData, setchooseData] = useState();
    const [isVisible, setVisible] = useState(false);
    const changeModalVisible =(bool)=>{
        setVisible(bool);
    }
    const setData = (data) => {
      setchooseData(data);
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{chooseData}</Text>
      <TouchableOpacity onPress={()=> changeModalVisible(true)}>
          <Text style={{fontSize: 20}}>Show Modal</Text>
          
      </TouchableOpacity>
        <Modal
        transparent={true}
        animationType = 'fade'
        visible={isVisible}
        nRequestClose ={ ()=> changeModalVisible(false)}
        >
            <SimpleModal
              changeModalVisible ={changeModalVisible}
              setData = {setData}
            />
        </Modal>
        <Button title="Go to detail screen!"
          onPress ={ () =>navigation.navigate('Detail')}
        />
      </View>
    );
  }
  export default HomeScreen;