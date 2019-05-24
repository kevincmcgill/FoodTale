import React from 'react';
import FoodMapComponent from '../../Component/FoodMapComponent';
import {FlatList,TouchableHighlight,View,Text} from 'react-native';
import Block from '../../Component/Custom_component/Block'


class foodMapContainer extends React.Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'red',
        },
        // headerLeft: null
    };
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleEmailChange = e => {
        this.setState( {email: e.nativeEvent.text});
    };

    handlePasswordChange = e => {
        this.setState({ password: e.nativeEvent.text  });
    };

    handleLogin = () => {

    };

    handleSignup = () => {
        
    };

    render() {
        return (
            // <FlatList
                
            //     data={[{title: 'Title Text', key: 'item1'}]}
            //     renderItem={({item, separators}) => (
            //         <TouchableHighlight
            //         onPress={() => this._onPress(item)}
            //         onShowUnderlay={separators.highlight}
            //         onHideUnderlay={separators.unhighlight}>
            //         <View style={{backgroundColor: 'white'}}>
            //             <Text>{item.title}</Text>
            //         </View>
            //         </TouchableHighlight>
            //     )}
            //     />
                // <FoodMapComponent
                //         email={this.state.email}
                //         password={this.state.password}
                //         handleEmailChange={this.handleEmailChange}
                //         handlePasswordChange={this.handlePasswordChange}
                //         handleLogin={this.handleLogin}
                //         handleSignup={this.handleSignup}
                //         /* validationState={this.getValidationState} */
                // />
                <Block/>
        );
    }
}


export default foodMapContainer;
