import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  onLogin() {
    const { email, password } = this.state;

    this.props.navigation.navigate("Inbox");

    // TODO: get 'email' and 'password' info from state, then use it to login to gmail

  }

  render() {
    return (
      <View>
        <View style={styles.layouts}>
          <Text style={styles.titleText}>NJIT MailBox</Text>
          <Text style={styles.smallText}>Please Login</Text>
          <TextInput
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            placeholder="email"
            placeholderTextColor="white"
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"password"}
            secureTextEntry={true}
            placeholderTextColor="white"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          >
            <Text style={styles.buttonText}> Login </Text>
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
}

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
    fontFamily: "Gill Sans",
    fontSize: 50,
    color: "powderblue",
    marginBottom:20,
  },
  smallText: {
    fontFamily: "Gill Sans",
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
    fontFamily: "Gill Sans",
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
