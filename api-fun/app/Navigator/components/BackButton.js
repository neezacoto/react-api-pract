import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import routes from '../routes';

function BackButton({ onPress }) {
        return (

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Entypo name="chevron-up" size={36} color="black" />
                </TouchableOpacity>
       
        );
}

export default BackButton;