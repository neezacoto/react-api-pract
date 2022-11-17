import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import appStyles from '../config/appStyles';
import AppText from './AppText';

function AppButton({ title, style, color, onPress, ...otherProps }) {
        return (
            <TouchableOpacity
            style={[styles.container, {backgroundColor: color}]}
            {...otherProps}
            onPress={onPress}
            >
                <AppText>
                {title}
                </AppText>

            </TouchableOpacity>     
        );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 15
  }

})

export default AppButton;