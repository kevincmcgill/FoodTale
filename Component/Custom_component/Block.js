
import React from 'react';
import PropTypes from 'prop-types';
import {View,Image,Text,FlatList,TouchableOpacity} from "react-native";
import {Button,Card, ListItem,  Icon} from 'react-native-elements';
import kfc from '../../resource/home/kfc.jpg';

    

const SideBar = props => {
    const styles = {
        
        button:{
            marginLeft:0,
            marginRight:0,
            height:10
        },
        block:{
            height:30,
        },
        image:{
            height:100,
            width:120,
            right:3,
            // flexDirection:'column',
            // alignItems:'flex-end',
            // justifyContent:'flex-end'
        }

        
    };
    const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
    ]
    return (
        
        
           <Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <TouchableOpacity
         
        onPress={this.onPress}
      >
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
        </TouchableOpacity>
      );
    })
  }
</Card>
                    
       
        
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

