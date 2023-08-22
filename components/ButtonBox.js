import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const ButtonBox = (props) => {
  const {label, icon, color} = props

  const handlePress = () => {
    props.handlePress(icon)
  }

  const buttonColor = ['#9C8481', '#E2CBB0', '#F5E1FD'][color]

  const imageLinks = {
    food: require("gallivantr/assets/buttons/food.png"),
    'drink-bar': require("gallivantr/assets/buttons/drink-bar.png"),
    'drink-cafe': require("gallivantr/assets/buttons/drink-cafe.png"),
    random: require("gallivantr/assets/buttons/random.png"),
    recreation: require("gallivantr/assets/buttons/recreation.png"),
    landmarks: require("gallivantr/assets/buttons/landmarks.png"),
    driving: require("gallivantr/assets/buttons/driving.png"),
    walking: require("gallivantr/assets/buttons/walking.png"),
    train: require("gallivantr/assets/buttons/train.png"),
    1: require("gallivantr/assets/buttons/1.png"),
    2: require("gallivantr/assets/buttons/2.png"),
    3: require("gallivantr/assets/buttons/3.png"),
    5: require("gallivantr/assets/buttons/5.png"),
    7: require("gallivantr/assets/buttons/7.png"),
    10: require("gallivantr/assets/buttons/10.png"),
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
