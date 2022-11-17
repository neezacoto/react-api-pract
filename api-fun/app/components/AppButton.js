import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import appStyles from '../config/appStyles';
import AppText from './AppText';

function AppButton({ title, style, color = "black", onPress, ...otherProps }) {
        return (
            <TouchableOpacity
            delayPressIn={78}
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
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "800"
  }

})

export default AppButton;