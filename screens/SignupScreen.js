import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Signup from './SignupScreen';
import { useNavigation } from '@react-navigation/native';


  const SignupScreen = () => {
    const handleSignPress = () => {
    }
  return (

 <View style={styles.container}>

<View style={styles.LogoContainer}>
       <Image source={require("../assets/Logo.png")} style={styles.LogoImage} />
     </View>
  <View><Text style={styles.CreateAccLabel}>Create Account</Text>
  </View>

<View style ={styles.userContainer}>
<TextInput style ={styles.usertextInput}
placeholder='Username'/>

</View>

    <View style={styles.emailAddContainer}>
      <TextInput style={styles.emailAddtextInput} 
      placeholder='Email Address' />
    </View>

    <View style={styles.passContainer}>
      <TextInput style={styles.passtextInput} 
      placeholder='Password' />
    </View>
  <View style={styles.MobContainer}>
      <TextInput style={styles.MobtextInput} 
      placeholder='Mobile' />
      </View>
    <View>
      <TouchableOpacity style={styles.signButton} onPress={handleSignPress}>
        <Text style={styles.signButtonText}>Sign Up</Text>
      </TouchableOpacity>
    

  </View>
     </View>
    

    
  )
};

export default SignupScreen

const styles = StyleSheet.create({
    container : {
        flex: 3,
        backgroundColor:"#faf4dc",
    },
    LogoImage:{
      width: "100%",
      height: 150,
      
    },userContainer:{
        backgroundColor:"#d4d5d9",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical:35,
        height: 40,
        elevation:10,
    },
    usertextInput: {
      flex: 1,
      marginLeft:14
  },
    emailAddContainer:{
        backgroundColor:"#d4d5d9",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 20,
        height: 40,
        elevation:10,
    },
    emailAddtextInput: {
    flex: 1,
    marginLeft:14
    },
    passContainer:{
        backgroundColor:"#d4d5d9",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical:35,
        height: 40,
        elevation:10,
    },
    passtextInput: {
    flex: 1,
    marginLeft:14
    },
    MobContainer:{
        backgroundColor:"#d4d5d9",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 20,
        height: 40,
        elevation:10,
    },
    MobtextInput: {
    flex: 1,
    marginLeft:14
    },
    CreateAccLabel: {
      fontSize: 22,
      fontWeight:'bold',
      marginVertical: 25,
      color: 'black',
      textAlign: 'center'

    },
    signButton: {
        backgroundColor: "#9cace3",
        borderRadius: 50,
        marginHorizontal: 125,
        marginVertical: 25,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    signButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    footerText: {
        color : "#ada096",
       textAlign : "center",
       fontSize: 16,
       marginTop: 100,
    }
   
})
