import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import InfoBox from '../components/InfoBox';
import appStyles from '../config/appStyles';

function ResponsePage(props) {
        return (
            <ScrollView style={[appStyles.statusBar, styles.container]}>
                  <InfoBox title="Header">hello bruh</InfoBox>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
  container: {}

})

export default ResponsePage;