import { StyleSheet, Text } from "react-native";

import { styles as GlobalStyles } from "../../utils/styles";
import Mail from "./Mail";
import React from "react";

const MailList = (props) => {
  let maillist = <Text style={styles.noMail}>No Mails Coming In Yet</Text>;
  if (props.maillist.length) {
    maillist = props.maillist.map((item, i) => {
      return (
        <Mail
          key={i}
          index={i}
          item={item}
          navigation={props.navigation}
        />
      );
    });
  }

  return maillist;
};

const styles = StyleSheet.create({
  noMail: {
    fontSize: GlobalStyles.fontSize,
    color: GlobalStyles.fontColor,
    fontWeight: "bold",
  },
});

export default MailList;
