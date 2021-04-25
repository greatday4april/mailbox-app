import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Mail = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("MailView", {
          item: props.item,
        });
      }}
    >
      <View style={styles.mailContainer}>
        <Text style={styles.mailTitle}>{props.item.subject}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 45,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#hsla(0, 100%, 90%, 0.3);",
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    elevation: 5,
    position: "relative",
  },
  mailTitle: {
    fontSize: 18,
    paddingLeft: 15,
    width: "80%",
  },
});

export default Mail;
