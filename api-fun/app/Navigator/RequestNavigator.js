import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import LandingPage from '../screens/LandingPage';
import ResponsePage from '../screens/ResponsePage';
import BackButton from './components/BackButton';
import appStyles from '../config/appStyles';

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
                        title: route.params?.data.title,
                        headerLeft: () => (
                            <BackButton 
                            onPress={() => navigation.goBack()}
                            />
                        ),
                        headerTitleStyle: {
                            fontSize: 24,
                            fontWeight: "700",
                            color: appStyles.themes.medium
                        }
                        
                    })} 
                />
            </Stack.Navigator>
        );
}


export default RequestNavigator;