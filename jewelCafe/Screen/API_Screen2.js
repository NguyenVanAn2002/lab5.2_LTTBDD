import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Pressable} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";


export default function API_Screen2({navigation}) {
  return (
    <View style={styles.container}>
        <Pressable style={styles.setPressView}
            onPress={navigation.navigate("API_Screen3")}
        >
            <Image  style={styles.setImage}
                        source={require("../image/kitanda.jpg")}
            ></Image>
            <View style={styles.setAccess}>
                <View style={styles.setleft}>
                    <Image  style={styles.setImageV}
                            source={require("../image/icon-v.jpg")}
                    ></Image>
                    <Text style={styles.setTextAcc}>Accepting Orders</Text>
                </View>
                <View style={styles.setRight}>
                    <Image  style={styles.setImageV}
                            source={require("../image/clock.jpg")}
                    ></Image>
                    <Text style={styles.setTextOrder}>5-10 minutes</Text>
                </View>
            </View>
            <View style={styles.setAdd}>
                <Text style={styles.setaddress}>Kitanda Espresso & Acai-U District</Text>
                <Text style={styles.setPlace}>1121 NE 45 St</Text>
            </View>
        </Pressable>
        <Pressable style={styles.setPressView}>
            <Image  style={styles.setImage}
                        source={require("../image/jewelboxcafe.jpg")}
            ></Image>
            <View style={styles.setAccess}>
                <View style={styles.setleft}>
                    <Image  style={styles.setImageV}
                            source={require("../image/lock.jpg")}
                    ></Image>
                    <Text style={styles.setTextTemp}>Tempory Unavailable</Text>
                </View>
                <View style={styles.setRight}>
                    <Image  style={styles.setImageV}
                            source={require("../image/clock.jpg")}
                    ></Image>
                    <Text style={styles.setTextOrder}>10-15 minutes</Text>
                </View>
            </View>
            <View style={styles.setAdd}>
                <Text style={styles.setaddress}>Jewel Box Cafe</Text>
                <Text style={styles.setPlace}>1145 GE 54 St</Text>
            </View>
        </Pressable>
        <Pressable style={styles.setPressView}>
            <Image  style={styles.setImage}
                        source={require("../image/javasticafe.jpg")}
            ></Image>
            <View style={styles.setAccess}>
                <View style={styles.setleft}>
                    <Image  style={styles.setImageV}
                            source={require("../image/lock.jpg")}
                    ></Image>
                    <Text style={styles.setTextTemp}>Tempory Unavailable</Text>
                </View>
                <View style={styles.setRight}>
                    <Image  style={styles.setImageV}
                            source={require("../image/clock.jpg")}
                    ></Image>
                    <Text style={styles.setTextOrder}>15-20 minutes</Text>
                </View>
            </View>
            <View style={styles.setAdd}>
                <Text style={styles.setaddress}>Javasti Cafe</Text>
                <Text style={styles.setPlace}>1167 GE 54 St</Text>
            </View>
        </Pressable>
        <Pressable style={styles.setPressView}>
            <Image  style={styles.setImage}
                        source={require("../image/trungNguyenLegend.jpg")}
            ></Image>
            <View style={styles.setAccess}>
                <View style={styles.setleft}>
                    <Image  style={styles.setImageV}
                            source={require("../image/icon-v.jpg")}
                    ></Image>
                    <Text style={styles.setTextAcc}>Accepting Orders</Text>
                </View>
                <View style={styles.setRight}>
                    <Image  style={styles.setImageV}
                            source={require("../image/clock.jpg")}
                    ></Image>
                    <Text style={styles.setTextOrder}>5-10 minutes</Text>
                </View>
            </View>
            <View style={styles.setAdd}>
                <Text style={styles.setaddress}>Trung Nguyen Legend</Text>
                <Text style={styles.setPlace}>1121 NE 45 St</Text>
            </View>
        </Pressable>
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
