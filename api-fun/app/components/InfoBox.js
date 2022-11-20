import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import appStyles from '../config/appStyles';
import AppText from './AppText';

const radius = 10
function InfoBox({title, children, style, isOpen, onPress, ...otherProps}) {
    const slideAnim = useRef(new Animated.Value(0)).current

    const [activated, setActivated] = useState(true)


    const openSlide = () => {
      onPress()
      setActivated(false)
      Animated.spring(
        slideAnim, 
        {
          toValue: 1, duration: 250, useNativeDriver: false
        }
      ).start()
    }

    const closeSlide = () => {
      onPress()
      Animated.timing(
        slideAnim, 
        {
          toValue: 0, duration: 250, useNativeDriver: false
        }
      ).start()
    }

    const iconAnim = () => (
    isOpen? {
      transform: [{ rotateZ: slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange:['0deg', '180deg']
      }) }], 
      backgroundColor: appStyles.themes.dark
    }:{
      transform: [{ rotateZ: slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange:['0deg', '180deg']
      }) }],
    }
    )

        return (
            <View 
            style={[style, styles.container,styles.shadow, isOpen && styles.openShadow]} {...otherProps}>
              <TouchableWithoutFeedback onPress={activated || !isOpen ? openSlide : closeSlide}>

                <View style={[styles.titleContainer, isOpen? styles.titleOpen : null ]}>
                 <AppText style={styles.title}>{title}</AppText>  

                 <Animated.View style={[styles.icon, iconAnim()]}>
                    <Entypo name="chevron-down" size={30} color={appStyles.themes.light} />      
                 </Animated.View>
                </View>

              </TouchableWithoutFeedback>

                <Animated.ScrollView style={[styles.desc, {maxHeight: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange:[0, 400]
                }), marginBottom: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange:[0, 10]
                }) }] }>
                    <AppText>
                        {children}
                    </AppText>
                </Animated.ScrollView>

            </View>
        );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: radius,
    backgroundColor: appStyles.themes.light,
    
  },
  desc: {
    // padding: 15,
    backgroundColor: appStyles.themes.white,
    borderRadius: 10,
    marginHorizontal: 8,
    // marginBottom: 10,
  },
  icon: {
    backgroundColor: appStyles.themes.medium,
    borderRadius: 100,
    padding: 3,
    marginLeft: "auto"
  },
  openShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity:  0.28,
    shadowRadius: 3.59,
    elevation: 10
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.18,
    shadowRadius: 1.59,
    elevation: 6
  },
  title: {
    fontWeight: "800",
    marginRight: 50,
    
  },
  titleContainer: {
    borderRadius: radius,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
   
    backgroundColor: appStyles.themes.light
  },
  titleOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },

})

export default InfoBox;