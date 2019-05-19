import React from 'react';
import SignUpComponent from '../../Component/SignUpComponent';


class signUpContainer extends React.Component {

    static navigationOptions = {
        headerTransparent: true
    };

    constructor(props) {
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            email: '',
            password: '',
            reenterPassword:''
        };
    };

    handleFirstNameChange = e => {
        this.setState({firstName: e.nativeEvent.text});
    }

    handleLastNameChange = e => {
        this.setState({lastName: e.nativeEvent.text});
    }


    handleEmailChange = e => {
        this.setState({email: e.nativeEvent.text});
    };

    handlePasswordChange = e => {
        this.setState({ password: e.nativeEvent.text});
    };

    handleReenterPasswordChange = e => {
        this.setState({reenterPassword: e.nativeEvent.text});
    }

    handleLogin = () => {
        const {navigate} = this.props.navigation;
        navigate('Home'); 
    };

    handleSignup = () => {
        
    };

    render() {
        return (
                
                
                <SignUpComponent
                        email={this.state.email}
                        password={this.state.password}
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        reenterPassword = {this.state.reenterPassword}

                        handleFirstNameChange = {this.handleFirstNameChange}
                        handleLastNameChange = {this.handleLastNameChange}
                        handleReenterPasswordChange = {this.handleReenterPasswordChange}
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}

                        handleLogin={this.handleLogin}
                        handleSignup={this.handleSignup}
                        /* validationState={this.getValidationState} */
                />
        );
    }
}


export default signUpContainer;
