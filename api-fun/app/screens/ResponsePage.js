import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Animated, LogBox } from 'react-native';




import AppText from '../components/AppText';
import appStyles from '../config/appStyles';
import InfoBox from '../components/InfoBox';


const responses = [
  "headers",
  "data",
  "config"
]


function ResponsePage({route}) {
  LogBox.ignoreAllLogs()
  const [pressed, setPressed] = useState({})
  const {data, resp} = route.params
  const { status } = resp
  
  console.log(status)
  const togglePressed = (detail) => {
    setPressed({
      ...pressed,
      [detail]: !pressed[detail]
    })
  }

  const renderData = ({ item }) => (
    <InfoBox isOpen={pressed[item]} title={item} style={styles.responseBoxes} onPress={()=> togglePressed(item)}>
      
      {JSON.stringify(resp[item], null, 2)}
    </InfoBox>
  )
        return (
          <View style={[  styles.container ]}>
            <View style={styles.textContainer}>
              <AppText style={styles.text}> Status: </AppText>
              <AppText style={styles.status}>{status || "Error"}</AppText>
            </View>
                 <FlatList 
                 style={styles.list}
                 data={responses} 
                 renderItem={renderData} 
                 keyExtractor={item => item}/>               

          </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10,
      },
      //do not add padding top or bottom, padding top to flatList breaks view
      list: {
        marginBottom: 40,
        paddingHorizontal: 10,
        marginTop: 20
      },
      responseBoxes: {
        marginBottom:  20
      },
      status: {
        fontSize: 35,
        fontWeight: "800",
        color: appStyles.themes.other
        
      },
      text: {
        fontSize: 30,
        
        fontWeight: "500",
        color: appStyles.themes.medium
      },
      textContainer: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: appStyles.themes.light,
        alignItems: "center"
      },

})

export default ResponsePage;