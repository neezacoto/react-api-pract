import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import appStyles from '../config/appStyles';
import AppText from './AppText';
import { Entypo } from '@expo/vector-icons';

import { Transition, Transitioning } from 'react-native-reanimated'

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out  type='fade' durationMs={200} />
  </Transition.Together>
)

function InfoBox({title, children, style, isOpen, onPress, ...otherProps}) {
    const ref = React.useRef()

        return (

            <Transitioning.View 
            ref={ref}
            transition={transition}
            style={[style, styles.container,styles.shadow, isOpen && styles.openShadow]} {...otherProps}>
              <TouchableWithoutFeedback 
              
              onPress={() => console.log(onPress )}>
                <View style={[styles.titleContainer, isOpen && styles.titleOpen ]}>
                 <AppText style={styles.title}>{title}</AppText>  

                 <View style={[styles.icon, isOpen && styles.iconOpen]}>
                    <Entypo name="chevron-down" size={30} color={appStyles.themes.light} />      
                 </View>
                </View>
              </TouchableWithoutFeedback>

                <View style={[styles.desc, isOpen? {height: "auto", padding: 10} : {height: 0, padding: 0, marginBottom: 0}] }>
                    <AppText>
                        {children}
                    </AppText>
                </View>

            </Transitioning.View>
        );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: appStyles.themes.light,
    
  },
  titleContainer: {
    borderRadius: 10,
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
  title: {
    fontWeight: "800",
    marginRight: 50,
    
  },
  icon: {
    backgroundColor: appStyles.themes.medium,
    borderRadius: 100,
    padding: 3,
    marginLeft: "auto"
  },
  iconOpen: {
    transform: [{ rotateZ: "180deg" }], 
    backgroundColor: appStyles.themes.dark
  },
  desc: {
    padding: 15,
    backgroundColor: appStyles.themes.white,
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: 10
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
openShadow: {
  shadowColor: "#000000",
  shadowOffset: {
    width: 3,
    height: 5,
  },
  shadowOpacity:  0.28,
  shadowRadius: 3.59,
  elevation: 10
}

})

export default InfoBox;