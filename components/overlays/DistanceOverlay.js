import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ButtonBox from '../ButtonBox.js'

const DistanceOverlay = (props) => {

  const handlePress = (name) => {props.setDistance(name)}

  const {walkingDistance} = props;

  const buttonColor = 2;

  if(walkingDistance) {
    return(
      <View>
        <View style={styles.threeBoxes}>
          <View style={styles.twoBoxes}>
            <ButtonBox icon={'1'} color={buttonColor} handlePress={handlePress}/>
            <ButtonBox icon={'2'} color={buttonColor} handlePress={handlePress}/>
          </View>
          <View style={styles.oneBox}>
            <ButtonBox icon={'3'} color={buttonColor} handlePress={handlePress}/>
          </View>
        </View>
      </View>
    )
  } else {
    return(
      <View>
        <View style={styles.fiveBoxes}>
          <View style={styles.twoBoxes}>
            <ButtonBox icon={'1'} color={buttonColor} handlePress={handlePress}/>
            <ButtonBox icon={'3'} color={buttonColor} handlePress={handlePress}/>
          </View>
          <View style={styles.oneBox}>
            <ButtonBox icon={'5'} color={buttonColor} handlePress={handlePress}/>
          </View>
          <View style={styles.twoBoxes}>
            <ButtonBox icon={'7'} color={buttonColor} handlePress={handlePress}/>
            <ButtonBox icon={'10'} color={buttonColor} handlePress={handlePress}/>
          </View>
        </View>
      </View>
    )
  }
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
  threeBoxes: {
    position: 'relative',
    top: 20,
    height: 200,
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

export default DistanceOverlay;
