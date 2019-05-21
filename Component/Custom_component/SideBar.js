
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View,Image,Text,FlatList} from "react-native";
import {Button} from 'react-native-elements';

    

const SideBar = props => {
    const styles = {
        
        button:{
            marginLeft:0,
            marginRight:0,
        },
        
    };

    return (
        
        <View style = {styles.backgroundColor}>

            <Button
                title = 'Setting'
            />
            <Button
                title = 'Log out'
            />
            
        </View>
        
    );
}

// HomeComponent.propTypes = {
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     handleEmailChange: PropTypes.func,
//     handlePasswordChange: PropTypes.func,
//     handleLogin: PropTypes.func,
//     handleSignup: PropTypes.func,
//     validationState: PropTypes.func
// };



export default SideBar;

