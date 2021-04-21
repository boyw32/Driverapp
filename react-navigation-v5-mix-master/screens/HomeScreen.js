import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Image style={{height:100,width:100}}  source={require('../assets/delivery.jpg')}/>
        <Text style={{color: colors.text,fontSize:20,fontWeight:"bold"}}>Chưa có đơn hàng</Text>
      <Button
        title="Đi đến Bản đồ"
        onPress={() => navigation.navigate("BookmarkScreen")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
