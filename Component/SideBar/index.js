
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View,Image,Text,FlatList} from "react-native";
import {Button} from 'react-native-elements';

    

const SideBar = props => {
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
        
        <View style = {styles.backgroundColor}>
            <FlatList
                data={[
                {key: <Button
                        title =  'login'/>},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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

