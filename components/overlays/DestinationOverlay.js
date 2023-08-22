import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ButtonBox from '../ButtonBox.js'

const DestinationOverlay = (props) => {

  const handlePress = (params) => {
    props.setDestination(params)
    props.forward()
  }

  const buttonColor = 0;

  return (
    <View>
      <View style={styles.fiveBoxes}>
        <View style={styles.twoBoxes}>
          <ButtonBox label={'Food'} icon={'food'} color={buttonColor} handlePress={handlePress}/>
          <ButtonBox label={'Drink'} icon={props.martiniOClock ? 'drink-bar' : 'drink-cafe'} color={buttonColor} handlePress={handlePress}/>
        </View>
        <View style={styles.oneBox}>
          <ButtonBox label={'Random'} icon={'random'} color={buttonColor} handlePress={handlePress}/>
        </View>
        <View style={styles.twoBoxes}>
          <ButtonBox label={'Recreation'} icon={'recreation'} color={buttonColor} handlePress={handlePress}/>
          <ButtonBox label={'Landmarks'} icon={'landmarks'} color={buttonColor} handlePress={handlePress}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fiveBoxes: {
    position: 'relative',
    top: 20,
    height: 350,
    width: 380,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  twoBoxes: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  oneBox: {
    width: 380,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default DestinationOverlay;
