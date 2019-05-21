import React from 'react';
import DiscoveryComponent from '../../Component/DiscoveryComponent';



class discoveryContainer extends React.Component {

    static navigationOptions = {
       
        headerStyle: {
            backgroundColor: 'red',
        },
       
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
                
                <DiscoveryComponent
                        email={this.state.email}
                        password={this.state.password}
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleLogin={this.handleLogin}
                        handleSignup={this.handleSignup}
                        /* validationState={this.getValidationState} */
                />
                // <SideBar/>
        );
    }
}


export default discoveryContainer;
