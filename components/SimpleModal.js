import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

export default function SimpleModal(props){
    const closeModal =(bool,data)=>{
        this.props.changeModalVisible(bool);
        this.props.setData(data);
    }
    return(
        <TouchableOpacity disabled={true}>
            <View style={styles.Container}>
        <View>
            <Text>Bạn có muốn tiếp tục?</Text>
        </View>
         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={
                    ()=> closeModal(false,'Cancel')
                }>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={
                    ()=> closeModal(true,'Ok')
                }>
                    <Text>Yes</Text>
                </TouchableOpacity>
            </View>
         </View>
        </View>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    Container: {
        width: 250,
        height: 80,
        backgroundColor: 'yellow',
      marginTop: 35,
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
  