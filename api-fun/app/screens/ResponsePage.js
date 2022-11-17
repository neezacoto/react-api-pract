import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import InfoBox from '../components/InfoBox';
import appStyles from '../config/appStyles';

function ResponsePage(props) {
        return (
            <ScrollView style={[appStyles.statusBar, styles.container]}>
                  <InfoBox title="Header">
                    hello bruh
                    im jojo
                  </InfoBox>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        
        paddingBottom: "10%"
        
      },

})

export default ResponsePage;