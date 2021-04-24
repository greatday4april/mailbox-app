import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AccountContext, { AccountProvider } from './utils/AccountContext'
import { useNavigation } from '@react-navigation/native';
import {  Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { readGmailList } from './apis/MessageApis'


export default function Login(props) {
  WebBrowser.maybeCompleteAuthSession(); //Allows browser prompt to close and switch back to app instance. 

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '808192904700-b3aho25fe46surper1rv57h1c9gujl5i.apps.googleusercontent.com',
    webClientId: '808192904700-b3aho25fe46surper1rv57h1c9gujl5i.apps.googleusercontent.com',
    androidClientId: '808192904700-c4b7ilrhkmtogosb87oo6q8nd7hm5jb4.apps.googleusercontent.com',
    scopes: ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/gmail.compose', 'https://www.googleapis.com/auth/gmail.readonly']
  });  

  const {account, setAccount} = React.useContext(AccountContext);

  React.useEffect(() => {
    if (response?.type === 'success') {    //Check for successful response on Authentication           
      //Retrieve Additional User Information
      fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + response.authentication.accessToken)
      .then(res => res.json())
      .then(
        async (result) => {
            var emailList = await readGmailList(response.authentication.accessToken, 15 ,''); //Setting to 15 for testing. 
            setAccount(
              {
                name: result.name,
                email: result.email,
                accessToken: response.authentication.accessToken,
                picture: result.picture,
                authenticated: true,
                emailList: emailList
              }
            );            
            return emailList;
        }
      ).then(() => {
        props.navigation.navigate("Inbox"); //Navigate to Inbox
      });
      
    }
  }, [response]);

  const styles = StyleSheet.create({ 
    layouts: {
      alignItems: "center",
      justifyContent: "center",
      marginTop:170,
    },
  
    fixed: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    container: {
      width: Dimensions.get("window").width, //for full screen
      height: Dimensions.get("window").height, //for full screen
    },
    titleText: {
      fontFamily: "Roboto",
      fontSize: 50,
      color: "powderblue",
      marginBottom:20,
    },
    smallText: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "300",
      color: "powderblue",
    },
    button: {
      alignItems: "center",
      backgroundColor: "powderblue",
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 25,
      marginBottom: 10,
      marginTop:20,
    },
    buttonText: {
      fontFamily: "Roboto",
      fontSize: 17,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: 200,
      fontFamily: "Baskerville",
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: "white",
      marginVertical: 10,
    },
  });

  return (
    <View>
      <View style={styles.layouts}>
        <Text style={styles.titleText}>NJIT MailBox</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          promptAsync();
        }}>
          <Text style={styles.buttonText}> Sign In </Text>
        </TouchableOpacity>
      </View>

      <ImageBackground
        style={[styles.fixed, styles.container, { zIndex: -1 }]}
        source={{
          uri: "https://cdn.hipwallpaper.com/i/85/42/j4R6DK.jpg",
        }}
      />
    </View>
  );
}