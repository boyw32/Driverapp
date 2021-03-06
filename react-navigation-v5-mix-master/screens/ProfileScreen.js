import React from 'react';
import { View, Text, Button, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar} source={require("../assets/cv.jpg")}/>
            <Text style={styles.name}>
              Xuân bách  ID:1711060655
            </Text>
        </View>
      </View>
      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Số đơn</Text>
          <Text style={styles.count}>80</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Cấp</Text>
          <Text style={styles.count}>Bạc</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Đơn hủy</Text>
          <Text style={styles.count}>10</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.buttonContainer}>
            <Text style={{color:'white',fontWeight:'bold'}}>Xem lịch sử đơn</Text>  
          </TouchableOpacity > 
          <Text style={styles.description}> </Text>
          <ProgressSteps>
        <ProgressStep>
            <View style={{ alignItems: 'center'}}>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
            </View>
        </ProgressStep>
    </ProgressSteps>
        </View>

    </View>
  </View>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00CED1",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});
