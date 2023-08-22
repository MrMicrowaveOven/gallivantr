import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const ButtonBox = (props) => {
  const {label, icon, color} = props

  const handlePress = () => {
    props.handlePress(icon)
  }

  const buttonColor = ['#9C8481', '#E2CBB0', '#F5E1FD'][color]

  const imageLinks = {
    food: require("../assets/buttons/food.png"),
    'drink-bar': require("../assets/buttons/drink-bar.png"),
    'drink-cafe': require("../assets/buttons/drink-cafe.png"),
    random: require("../assets/buttons/random.png"),
    recreation: require("../assets/buttons/recreation.png"),
    landmarks: require("../assets/buttons/landmarks.png"),
    driving: require("../assets/buttons/driving.png"),
    walking: require("../assets/buttons/walking.png"),
    train: require("../assets/buttons/train.png"),
    1: require("../assets/buttons/1.png"),
    2: require("../assets/buttons/2.png"),
    3: require("../assets/buttons/3.png"),
    5: require("../assets/buttons/5.png"),
    7: require("../assets/buttons/7.png"),
    10: require("../assets/buttons/10.png"),
  }

  const imageLink = imageLinks[icon]
  return(
    <View>
      <Text style={styles.boxLabel}>{label}</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.box, { backgroundColor: buttonColor }]}>
          <Image style={styles.locationTypeIcon} source={imageLink}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  boxLabel: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  locationTypeIcon: {
    width: 48,
    height: 48
  },
  box: {
    width: 85,
    height: 85,
    borderRadius: 15,
    borderColor: '#FDFAF1',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ButtonBox;
