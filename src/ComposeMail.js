import * as MailComposer from 'expo-mail-composer';

import { Button, Icon } from 'react-native-elements';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AccountContext from "./utils/AccountContext";
import React from "react";
import {sendBasicEmail} from "./apis/MessageApis";

class ComposeMail extends React.Component {
  static contextType = AccountContext;
  state = {
    email: "",
    subject: "",
    body: "",
  };
  render() {
    return (
      <View>
        <View style={{ padding: 50 }}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder="To : email"
            placeholderTextColor="white"
            style={styles.emailInput}
          />
          <TextInput
            value={this.state.subject}
            onChangeText={(subject) => this.setState({ subject })}
            placeholder="Subject"
            placeholderTextColor="white"
            style={styles.emailInput}
          />

          <TextInput
            value={this.state.body}
            multiline
            placeholder="body"
            placeholderTextColor="white"
            onChangeText={(body) => this.setState({ body })}
            maxLength={900}
            style={styles.bodyInput}
          />
        </View>
        <View>
          <Button
            title=" Send Email"
            buttonStyle={{
              backgroundColor: "#7cc",
              width: 200,
              marginLeft: 120,
            }}
            icon={<Icon name="envelope-o" type="font-awesome" color="white" />}
            onPress={() => {this.sendMail(this.context.account);}}
          />
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
  sendMail(account) {
    // TODO: replace MailComposer with our send mail logic
    sendBasicEmail(account, this.state.email, this.state.subject, this.state.body);
  }
}

const styles = StyleSheet.create({
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
  button: {
    alignItems: "center",
    backgroundColor: "powderblue",
    width: 100,
    height: 144,
    padding: 100,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  emailInput: {
    width: 330,
    fontFamily: "Baskerville",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 10,
  },
  bodyInput: {
    width: 330,
    fontFamily: "Baskerville",
    fontSize: 20,
    height: 500,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 10,
  },
});
export default ComposeMail;