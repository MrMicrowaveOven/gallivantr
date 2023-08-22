import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Image, Text, View, StyleSheet } from 'react-native';

const StartingLocationOverlay = (props) => {

  const moveForward = () => {
    props.forward()
  }

  return (
    <View>
      <Text style={styles.title}>Gallivantr</Text>
      <Text style={styles.text}>Find My Location</Text>
      <View style={styles.locationImageView}>
        <TouchableWithoutFeedback onPress={moveForward}>
            <Image style={styles.locationImage} source={require('gallivantr/assets/buttons/search.png')}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationImageView: {
    position: 'relative',
    top: 95,
    alignItems: 'center'
  },
  locationImage: {
    width: 50,
    height: 50,
  },
  title: {
    position: 'relative',
    top: 45,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'GeorgiaFont',
    color: '#4B3B42'
  },
  text: {
    position: 'relative',
    top: 65,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'GeorgiaFont',
    color: '#4B3B42'
  }
});

export default StartingLocationOverlay;
