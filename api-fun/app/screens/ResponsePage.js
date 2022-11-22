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

//nested flatlist crazy inefficient, just wanted to prove I could do it, 
//I don't see myself having the need to do this in the future
//I intend to use flashlists in the future
function ResponsePage({route}) {
  LogBox.ignoreAllLogs()
  const [pressed, setPressed] = useState({})

  const {data, resp} = route.params
  const { status } = resp

    const ligma = [
      {
        id: 1
      },
      {
        id: 2
      },
    ]
    const info = Array.isArray(resp)? resp.map( (r,index) => (

      {
        "id": index,
        "headers": JSON.stringify(r.headers),
        "data": JSON.stringify(r.data),
        "config": JSON.stringify(r.config)
      }

    )): resp;

  const togglePressed = (detail) => {
    setPressed({
      ...pressed,
      [detail]: !pressed[detail]
    })
  }
  
  const renderData = ({ item }) => {
    return(
      <InfoBox isOpen={pressed[item]} title={item} style={styles.responseBoxes} onPress={()=> togglePressed(item)}>
        
        {JSON.stringify(info[item], null, 2)}
      </InfoBox>
  )}

  const renderMultiData = (item,id) => {
    //console.log("bruchacha",info, item, id, pressed)
    return(
      <InfoBox isOpen={pressed["data" + item + id]} title={item} style={styles.responseBoxes} onPress={()=> togglePressed("data"+ item + id)}>
        
        {JSON.stringify(info[id][item], null, 2)}
      </InfoBox>
  )}


  const renderDisplay = ({ item }) => {
    const id = item.id
     return(
    <InfoBox isOpen={pressed["resp" + id]} title={`Response ${id+1}`} isDisplay style={styles.responseBoxes} onPress={()=> togglePressed("resp"+id)}>
      <FlatList 
      style={styles.list}
      data={responses} 
      renderItem={({item}) => renderMultiData(item, id)} 
      keyExtractor={item => item}
      />  
    </InfoBox>
  )}

  const createList = () => (
    <FlatList 
      style={styles.list}
      data={responses} 
      renderItem={renderData} 
      keyExtractor={item => item}
      />  
  )
  
        return (
          <View style={[  styles.container ]}>
            <View style={styles.textContainer}>
              <AppText style={styles.text}> Status: </AppText>
              <AppText style={styles.status}>{status || "Error"}</AppText>
            </View>
            {
              (status >=400)? (
                <AppText style={styles.error}>Request Failed</AppText>
              ) : (
                Array.isArray(info)? (
                  
                  <FlatList 
                    style={styles.list}
                    data={info}
                    renderItem={renderDisplay}
                    keyExtractor={item => "resp" + item.id}
                    />
                ) : (
                  createList()
                )
              )
            
            }
                              

          </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10,
      },
      error: {
        fontSize: 40,
        color: appStyles.themes.medium,
        fontWeight: "800"
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