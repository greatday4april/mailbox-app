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
    height: 30,
    marginTop: 40,
    marginLeft: 150,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  headerText: {
    fontFamily:'Gill Sans',
    fontSize: 30,
    color: 'powderblue',
  },
});
