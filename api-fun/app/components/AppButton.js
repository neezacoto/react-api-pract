import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

function AppButton({ title, style, color = "black", onPress, ...otherProps }) {
        return (
            <TouchableOpacity
            style={[styles.container, {backgroundColor: color}, style]}
            {...otherProps}
            onPress={onPress}
            >
                <AppText style={styles.text}>
                {title}
                </AppText>

            </TouchableOpacity>     
        );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.18,
    shadowRadius: 4.59,
    elevation: 7

  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "800"
  }

})

export default AppButton;