import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements'

import routes from '../routes';

function BackButton({ navigation, route, onPress, ...otherProps }) {
        return (

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Entypo name="chevron-up" size={36} color="black" />
                </TouchableOpacity>
       
        );
}

const styles = StyleSheet.create({
  container: {}

})

export default BackButton;