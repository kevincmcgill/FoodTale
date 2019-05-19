import {createStackNavigator, createAppContainer} from 'react-navigation';
import loginContainer from './Container/LoginContainer'
import signUpContainer from './Container/SignUpContainer'
import homeContainer from './Container/HomeContainer'




const MainNavigator = createStackNavigator({
  Login: {screen:loginContainer},
  SignUp: {screen: signUpContainer},
  
  Home: {screen: homeContainer}
  
  
});

const App = createAppContainer(MainNavigator);

export default App;
