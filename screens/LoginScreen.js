import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    const handleLoginPress = () => {
         console.log('Login button pressed')
    }
  return (
    <View style={styles.container}>
    <View style={styles.LogoContainer}>
       <Image source={require("../assets/Logo.png")} style={styles.LogoImage} />
     </View> 
    <View style={styles.emailAddContainer}>
      <TextInput style={styles.emailAddtextInput} 
      placeholder='Email Address' />
    </View>
    <View style={styles.passContainer}>
      <TextInput style={styles.passtextInput} 
      placeholder='Password' />
    </View>
    <Text style={styles.forgotpassLabel}>Forgot Password?</Text>
     <TouchableOpacity style={styles.loginButton} onPress=
     {handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
     </TouchableOpacity>
     
     </View>

    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:"#faf4dc",
    },
    LogoImage:{
        width: "100%",
        height: 350,
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
    forgotpassLabel: {
        color: "#ada096",
        textAlign: "right",
        width:"95%",
        marginVertical: -28,
        fontSize: 15,
    },
    loginButton: {
        backgroundColor: "#9cace3",
        borderRadius: 50,
        marginHorizontal: 100,
        marginVertical: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    loginButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
