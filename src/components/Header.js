import { StyleSheet, Text, View } from "react-native";

import { styles as GlobalStyles } from "../utils/styles";
import React from "react";

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    marginTop: 50,
    marginLeft: 110,
    textAlign: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  headerText: {
    fontFamily:'Gill Sans',
    fontSize: 40,
    color: 'powderblue',
  },
});
