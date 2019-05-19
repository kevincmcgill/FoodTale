import React from 'react';
import LoginComponent from '../../Component/LoginComponent';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class loginContainer extends React.Component {

    static navigationOptions = {
        header: null
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
        // navigate('Profile', {name: 'Jane'});
    };

    handleSignup = () => {
        const {navigate} = this.props.navigation;
        navigate('SignUp');
    };

    render() {
        return (
                
                <LoginComponent
                        email={this.state.email}
                        password={this.state.password}
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleLogin={this.handleLogin}
                        handleSignup={this.handleSignup}
                        /* validationState={this.getValidationState} */
                />
        );
    }
}


export default loginContainer;
