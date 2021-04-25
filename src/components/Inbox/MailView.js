import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import HtmlText from "react-native-html-to-text";
import { Paragraph } from "react-native-paper";
import React from "react";
import utf8 from "utf8";

class MailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    const item = navigation.getParam('item', null)
    return (
      <View style={[styles.fixed, styles.containter]}>
        <View style={styles.mailcont}>
          <Text style={styles.sender}>{item.from}</Text>
          <Text style={styles.recip}>{item.to}</Text>
          <Text style={styles.subject}>{item.subject}</Text>
          <Text style={styles.subject}>{item.plainText}</Text>
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
  mailcont: {
    fontFamily: "Baskerville",
    padding: 10,
  },
  mailtext: {
    fontSize: 20,
    backgroundColor: "powderblue",
    borderWidth: 1,
    borderColor: "black",
  },
  recip: {
    fontSize: 25,
    backgroundColor: "powderblue",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  sender: {
    fontSize: 25,
    backgroundColor: "powderblue",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    marginBottom: 10,
  },
  subject: {
    fontSize: 30,
    backgroundColor: "powderblue",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
});

export default MailView;
