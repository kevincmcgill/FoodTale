
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View,Image, ImageBackground} from "react-native";
import {Button,Header} from 'react-native-elements';
import loginBG from '../../resource/loginBG.jpg';
import logo from '../../resource/logo.png';
import { ScrollView } from 'react-native-gesture-handler';
    

const SignUpComponent = props => {

    

    const styles = {
        textInput: {
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            margin:20,
            color:'white',
            fontSize: 20
        },
        button:{
            marginTop:10,
            margin:20,
            color:'blue'
        },
        logo:{
            marginTop:100,
            // flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
            
        }
    };

    return (
        
        // <View style = {styles.backgroundColor}>
        
            <ImageBackground source={loginBG} style={{width: '100%', height: '100%'}}>
               
                {/* <View style = {styles.logo}> 
                    <Image source = {logo} />
                </View> */}
                <ScrollView style = {height = 50}>
                <TextInput
                style={[styles.textInput, {marginTop:80}]}
                onChange={props.handleFirstNameChange}
                value={props.firstName}
                placeholder = "First Name"
                placeholderTextColor = 'white'
                autoCapitalize = 'none'
                autoCorrect = {false}
                />
                <TextInput
                style={[styles.textInput, {marginTop:20}]}
                onChange={props.handleLastNameChange}
                value={props.lastName}
                placeholder = "Last Name"
                placeholderTextColor = 'white'
                autoCapitalize = 'none'
                autoCorrect = {false}
                />

                <TextInput
                style={[styles.textInput, {marginTop:20}]}
                onChange={props.handleEmailChange}
                value={props.email}
                placeholder = "example@email.com"
                placeholderTextColor = 'white'
                autoCapitalize = 'none'
                autoCorrect = {false}
                />
            
                <TextInput
                style={[styles.textInput,{marginTop:20}]}
                onChange={props.handlePasswordChange}
                value={props.password}
                placeholder = "Password"
                placeholderTextColor = 'white'
                secureTextEntry = {true}
                />

                <TextInput
                style={[styles.textInput,{marginTop:20}]}
                onChange={props.handleReenterPasswordChange}
                value={props.reenterPassword}
                placeholder = "Re-enter Password"
                placeholderTextColor = 'white'
                secureTextEntry = {true}
                />
                
               
                </ScrollView>
                <Button
                title = "Login"
                onPress = {props.handleLogin}
                style = {[styles.button,{marginBottom:100}]}
                buttonStyle={{ backgroundColor: 'purple' }}
                titleStyle = {{color:'white'}}
                accessibilityLabel="Learn more about this purple button"
                />
           </ImageBackground>

        // </View>
        
    );
}

SignUpComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    reenterPassword: PropTypes.string.isRequired,

    handleFirstNameChange:PropTypes.func,
    handleLastNameChange:PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleReenterPasswordChange:PropTypes.func,
    handleLogin: PropTypes.func,
    handleSignup: PropTypes.func,
    validationState: PropTypes.func
};



export default SignUpComponent;

