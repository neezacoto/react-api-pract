import Constants  from 'expo-constants';
import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    statusBar: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    statusBarHeight: Constants.statusBarHeight,
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }, 
    themes: {
        primary: '#000',
        secondary: '#fff',
        black: "#000",
        white: "#fff",
        medium: "#888888",

        get: "#035edb",
        post: "#1898b2",
        putPatch: "#ffb90d",
        delete: "#d22d3b",
        other: "#606a72",

        light: "#EEEEEE",
        dark: "#0c0c0c",
        danger:"#ff5252"
    }
})
export default appStyles;