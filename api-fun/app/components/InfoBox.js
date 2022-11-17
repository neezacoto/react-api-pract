import React from 'react';
import { View, StyleSheet } from 'react-native';
import appStyles from '../config/appStyles';
import AppText from './AppText';

function InfoBox({title, children, ...otherProps}) {
        return (
            <View style={styles.container} {...otherProps}>
                <View style={styles.titleContainer}>
                 <AppText >{title}</AppText>        
                </View>
                <View>
                    <AppText>
                        {children}
                    </AppText>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "dodgerblue"
  },
  titleContainer: {
    flex: 1,
    
    justifyContent: "center",
    backgroundColor: appStyles.themes.light
  }

})

export default InfoBox;