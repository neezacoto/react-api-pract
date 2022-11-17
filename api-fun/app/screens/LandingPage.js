import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import appStyles from '../config/appStyles';

function LandingPage(props) {
        return (
            <View style={[appStyles.statusBar,styles.container]}>
                  <AppText style={styles.header}> Axios Demo</AppText>
                  <View>
                    <AppButton title="get" />
                  </View>
            </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center"
  },
  header: {
    fontSize: 40,
    fontWeight: "600"
  }

})

export default LandingPage;