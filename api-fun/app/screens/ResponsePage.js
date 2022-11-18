import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList, Easing } from 'react-native';
import AppText from '../components/AppText';
import InfoBox from '../components/InfoBox';
import appStyles from '../config/appStyles';


const responses = [
  "headers",
  "data",
  "config"
]


function ResponsePage({request}) {
  const [pressed, setPressed] = useState({})
  const data = request


  const togglePressed = (detail) => {
    setPressed({
      ...pressed,
      [detail]: !pressed[detail]
    })
  }

  const renderData = ({ item }) => (
    <InfoBox isOpen={pressed[item]} title={item} style={styles.responseBoxes} onPress={()=> togglePressed(item)}>
      {item}
    </InfoBox>
  )
        return (
          <View style={[appStyles.statusBar,  styles.container ]}>
            <View style={styles.textContainer}>
              <AppText style={styles.text}>Satus: </AppText>
              <AppText style={styles.status}>{data?.status || 404}</AppText>
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
        
        paddingBottom: "10%",


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
      status: {
        fontSize: 35,
        fontWeight: "800",
        color: appStyles.themes.other

      },
      list: {
        paddingTop: "10%",
        padding: 10
      },
      responseBoxes: {
        marginBottom:  20
      }

})

export default ResponsePage;