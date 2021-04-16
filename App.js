import LoginPage from './src/Login';
import Main from './src/Main';
import ComposeMail from './src/ComposeMail'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator({
  Login : LoginPage,
  Inbox : Main,
  Compose: ComposeMail,
})

const App = createAppContainer(RootStack);

export default App;
