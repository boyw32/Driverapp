import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';

export default class ExploreScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../assets/cv.jpg")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Xuân Bách</Text>           
              <View style={styles.buttonContainer}>
                <Text style={{fontWeight:'bold',color:'red',fontSize:20}}>Số Dư: 1.600.000</Text> 
                <View style={{flexDirection:'column',flex:1,justifyContent: 'center'}}>
                <TouchableOpacity style={styles.text}><Text style={{fontWeight:'bold'}}>Rút tiền</Text></TouchableOpacity>
                <TouchableOpacity style={styles.text}><Text style={{fontWeight:'bold'}}>Nạp tiền</Text></TouchableOpacity>
              </View>
              </View>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    backgroundColor: "#91e8e1",
    borderWidth:2,
    borderRadius:5,
  },
  text:{
    marginLeft:100,
    marginBottom:10,
    height:30,
    width:60,
    backgroundColor: "transparent",
    alignItems: 'center',
    borderRadius:5,
    borderWidth:2
    
  }
});