import * as Font from 'expo-font';

import React, { useEffect, useState } from "react";

import { AccountProvider } from "./src/utils/AccountContext";
import AppLoading from "expo-app-loading";
import ComposeMail from "./src/ComposeMail";
import Login from "./src/Login";
import Mail from './src/components/Inbox/Mail';
import MailList from './src/components/Inbox/Maillist';
import MailView from './src/components/Inbox/MailView';
import Main from "./src/Main";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator({
  Login: Login,
  Inbox: Main,
  Compose: ComposeMail,
  MailView: MailView,
});

const AppContainer = createAppContainer(RootStack); //Store Account Information

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto': require('./assets/Roboto-Regular.ttf'),
        'Roboto_medium': require('./assets/Roboto-Medium.ttf'),
      });
      setLoading(false);
    };
    loadFonts();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <AccountProvider>
      <AppContainer />
    </AccountProvider>
  );
};

export default App;
