import * as React from "react";

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { styles as GlobalStyles } from "./utils/styles";
import { Header } from "./components/Header";
import MailList from "./components/Inbox/Maillist";

export default class Inbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      maillist: ['haha','heyhey','hoho','yayay','hihih','oooo','lalal','dududu','momomo','mimimi','yiyiyi','mimiyaya'], // placeholders, each one refer to each mail
    };
  }

  render() {
    return (
      <View>
        <Header title="NJIT MailBox" />
        <View style={styles.container}>
          <View style={styles.maillistWrp}>
            <View>
              <Text style={styles.listHeader}>Inbox</Text>
            </View>
            <ScrollView>
              <MailList maillist={this.state.maillist} />
            </ScrollView>
          </View>
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
  textInput: {
    color: GlobalStyles.color,
    fontSize: 28,
    fontStyle: "italic",
  },
  noMail: {
    fontSize: GlobalStyles.fontSize,
    color: GlobalStyles.color,
    fontWeight: "bold",
  },
  maillistWrp: {
    margin: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  listHeader: {
    fontSize: 25,
    color: GlobalStyles.color,
    fontFamily: "Gill Sans",
    fontWeight: "400",
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