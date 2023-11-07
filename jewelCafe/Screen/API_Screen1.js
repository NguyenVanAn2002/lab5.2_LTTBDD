import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Pressable} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



export default function API_Screen1({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textWel}>Welcom to cafe World</Text>
        <Image style={styles.setImage}
               source={require("../image/jewelboxcafe.jpg")}
        ></Image>
        <Image  style={styles.setImage}
                source={require("../image/javasticafe.jpg")}
        ></Image>
        <Image  style={styles.setImage}
                source={require("../image/kitanda.jpg")}
        ></Image>
        <Pressable style={styles.setPress}
            onPress={navigation.navigate("API_Screen2")}
            >
            <Text style={styles.textGet}>GET STARTED</Text>
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
  textWel:{
    width:"100%",
    height:60,
    fontSize:24,
    fontWeight:700,
    marginTop:40,
    marginLeft:130,
    // backgroundColor:"red"
  },
  setImage:{
    width:200,
    height:80,
    borderRadius:10,
    marginTop:50
  },
  setPress:{
    width:312,
    height:50,
    borderRadius:6,
    backgroundColor:"#00BDD6",
    marginTop:50,
    alignItems:"center",
    alignContent:"center"
  },
  textGet:{
    fontSize:14,
    fontWeight:700,
    color:"#FFFFFF",
    marginTop:15
  }

});
