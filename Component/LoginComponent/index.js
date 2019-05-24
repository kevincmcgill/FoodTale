
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View,Image, ImageBackground} from "react-native";
import {Button} from 'react-native-elements';
import loginBG from '../../resource/loginBG.jpg';
import logo from '../../resource/logo.png';


const LoginComponent = props => {

    

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
            marginTop:5,
            margin:20,
            color:'blue',
            
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
                <View style = {styles.logo}> 
                    <Image source = {logo} />
                </View>
                

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
                
                <Button
                title = "Login via Facebook"
                onPress = {props.handleLogin}
                style = {styles.button}
                buttonStyle={{ backgroundColor: 'purple' }}
                titleStyle = {{color:'white'}}
                accessibilityLabel="Learn more about this purple button"
                
                />

                <Button
                title = "Login via Google"
                onPress = {props.handleLogin}
                style = {styles.button}
                buttonStyle={{ backgroundColor: 'purple' }}
                titleStyle = {{color:'white'}}
                accessibilityLabel="Learn more about this purple button"
                />

                <Button
                title = "Login"
                onPress = {props.handleLogin}
                style = {styles.button}
                buttonStyle={{ backgroundColor: 'purple' }}
                titleStyle = {{color:'white'}}
                accessibilityLabel="Learn more about this purple button"
                />
                <Button
                title="Sign Up"
                onPress={props.handleSignup}
                style = {styles.button}
                buttonStyle={{ backgroundColor: 'purple' }}
                titleStyle = {{color:'white'}}
                />
           </ImageBackground>

        // </View>
        
    );
}

LoginComponent.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSignup: PropTypes.func,
    validationState: PropTypes.func
};



export default LoginComponent;

