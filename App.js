import Login from './src/Login';
import Main from './src/Main';
import ComposeMail from './src/ComposeMail'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { AccountProvider } from './src/utils/AccountContext'
import React from 'react';

const RootStack = createStackNavigator({
  Login : Login,
  Inbox : Main,
  Compose: ComposeMail,
})

const AppContainer = createAppContainer(RootStack); //Store Account Information

const App = () => {
  return (
  <AccountProvider>
    <AppContainer />
  </AccountProvider>);
}

export default App;
