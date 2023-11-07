import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Pressable} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";


export default function API_Screen3({navigation}) {
  return (
    <View style={styles.container}>
       abc
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  setPressView:{
    width:347,
    height:200,
    borderRadius:6,
    // backgroundColor:"red"
  },
  setImage:{
    width:347,
    height:114,
    borderRadius:6
  },
  setAccess:{
    width:"100%",
    height:30,
    marginTop:3,
    // backgroundColor:"blue",
    flexDirection:"row"
  },
  setleft:{
    width:"50%",
    height:"100%",
    // backgroundColor:"grey",
    marginLeft:5,
    flexDirection:"row"
  },
  setImageV:{
    width:25,
    height:25
  },
  setTextAcc:{
    fontWeight:500,
    marginTop:4,
    color:"green"
  },
  setTextTemp:{
    fontWeight:500,
    marginTop:4,
    color:"red"
  },
  setRight:{
    width:"40%",
    height:"100%",
    // backgroundColor:"grey",
    marginLeft:20,
    flexDirection:"row",
    marginLeft:40
  },
  setTextOrder:{
    fontWeight:500,
    marginTop:4,
    color:"red",
    marginLeft:10
  },
  setAdd:{
    width:"100%",
    height:56,
    flexDirection:"column"
  },
  setaddress:{
    fontSize:16,
    fontWeight:700,
  },
  setPlace:{
    fontSize:14,
    fontWeight:400,
    color:"grey"
  }

});
