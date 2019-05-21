import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
import loginContainer from './Container/LoginContainer';
import signUpContainer from './Container/SignUpContainer';
import foodMapContainer from './Container/FoodMapContainer';
import discoveryContainer from './Container/DiscoveryContainer';

// import cameraContainer from './Container/CameraContainer';


const TabNavigator = createBottomTabNavigator({
  FoodMap: { screen: foodMapContainer },
  Discovery: { screen: discoveryContainer },
  // Camera: {screen:cameraContainer}
});




const MainNavigator = createStackNavigator({
  FoodMapComponent:{screen:TabNavigator},
  Login: {screen:loginContainer},
  SignUp: {screen: signUpContainer},
  
  
});

const App = createAppContainer(MainNavigator);

export default App;
