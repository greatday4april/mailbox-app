import { StyleSheet, Text, View } from "react-native";
import AccountContext, { AccountProvider } from '../utils/AccountContext'
import { styles as GlobalStyles } from "../utils/styles";
import React from "react";

export const Header = (props) => {
  const {account, setAccount} = React.useContext(AccountContext);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Text style={styles.userText}>Signed in as: {account.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    marginTop: 40,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  headerText: {
    fontFamily:'Roboto',
    fontSize: 30,
    color: 'powderblue',
  },
  userText: {
    color: "white"
  }
});
