import * as React from "react";

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { styles as GlobalStyles } from "./utils/styles";
import { Header } from "./components/Header";
import MailList from "./components/Inbox/Maillist";

export default class Inbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      maillist: [
        "haha",
        "heyhey",
        "hoho",
        "yayay",
        "hihih",
        "oooo",
        "lalal",
        "dududu",
        "momomo",
        "mimimi",
        "yiyiyi",
        "mimiyaya",
      ], // placeholders, each one refer to each mail
    };
  }

  toCompose() {
    const { email, password } = this.state;

    this.props.navigation.navigate("Compose");

  }

  render() {
    return (
      <View>
        <Header title="NJIT Inbox" />

        <View style={styles.maillistWrp}>
          <View>

            <TouchableOpacity
              style={styles.button}
              onPress={this.toCompose.bind(this)}
            >
              <Text style={styles.buttonText}> Compose </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <MailList maillist={this.state.maillist} />
          </ScrollView>
        </View>

        <ImageBackground
          style={[styles.fixed, styles.containter, { zIndex: -1 }]}
          source={{
            uri: "https://cdn.hipwallpaper.com/i/85/42/j4R6DK.jpg",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "powderblue",
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Gill Sans",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    color: GlobalStyles.color,
    fontSize: 28,
    fontStyle: "italic",
  },

  maillistWrp: {
    margin: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
  },
});