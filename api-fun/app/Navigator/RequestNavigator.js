import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import LandingPage from '../screens/LandingPage';
import ResponsePage from '../screens/ResponsePage';
import BackButton from './components/BackButton';

const Stack = createNativeStackNavigator();

function RequestNavigator() {
        return (
            <Stack.Navigator
                screenOptions={{presentation: "modal"}}
            >
                <Stack.Screen 
                    name={routes.REQ_SCREEN} 
                    component={LandingPage}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name={routes.RESP_SCREEN} 
                    component={ResponsePage}
                    options={({ navigation, route}) =>({
                        headerLeft: () => (
                            <BackButton 
                            onPress={() => navigation.goBack()}
                            />
                        ),
                    })} 
                />
            </Stack.Navigator>
        );
}

const styles = StyleSheet.create({
  container: {}

})

export default RequestNavigator;