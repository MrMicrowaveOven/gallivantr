import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonBox from '../ButtonBox.js'

const TransportOverlay = (props) => {

  const handlePress = (name) => {
    props.setTransport(name)
    props.forward()
  }

  const buttonColor = 1;

  return(
    <View>
      <View style={styles.threeBoxes}>
        <View style={styles.twoBoxes}>
          <ButtonBox label={'Driving'} icon={'driving'} color={buttonColor} handlePress={handlePress}/>
          <ButtonBox label={'Walking'} icon={'walking'} color={buttonColor} handlePress={handlePress}/>
        </View>
        <View style={styles.oneBox}>
          <ButtonBox label={'Public Transit'} icon={'train'} color={buttonColor} handlePress={handlePress}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default TransportOverlay;
