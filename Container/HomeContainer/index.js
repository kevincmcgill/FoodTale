import React from 'react';
import HomeComponent from '../../Component/HomeComponent';


class homeContainer extends React.Component {

    static navigationOptions = {
        // header: null
        headerStyle: {
            backgroundColor: 'red',
        },
        headerLeft: null
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
                
                <HomeComponent
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


export default homeContainer;
