import React, { useState, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback, Image, Text, View, StyleSheet } from 'react-native';
import StartingLocationOverlay from './overlays/StartingLocationOverlay.js'
import DestinationOverlay from './overlays/DestinationOverlay.js'
import TransportOverlay from './overlays/TransportOverlay.js'
import DistanceOverlay from './overlays/DistanceOverlay.js'
import Minimized from './overlays/Minimized.js'
import ReviewSelectionPop from './overlays/ReviewSelectionPop.js'

const Interface = (props) => {

  const [destination, setDestination] = useState(null)
  const [transport, setTransport] = useState(null)
  const [distance, setDistance] = useState(null)

  const forward = () => {
    props.forward()
  }

  const backward = () => {
    props.backward()
  }

  const {phase, martiniOClock} = props

  const overlayStyle = [{
    position: 'absolute',
    backgroundColor: '#98AEB6',
    width: '100%',
    borderRadius: 75,
    alignItems: 'center'
  }]

  const overlayStyleByPhase = [
    { height: 320, top: -55 },
    { height: 600, bottom: -125 },
    { height: 600, bottom: -125 },
    { height: 600, bottom: -125 },
    { height: 600, bottom: -555 },
    { height: 600, bottom: -425 }
  ][phase]

  overlayStyle.push(overlayStyleByPhase)

  const selections = {
    destination: destination,
    transport: transport,
    distance: distance
  }

  const setDistanceProp = (param) => {
    setDistance(param)
    props.setInfo(
      {
        destination: destination,
        transport: transport,
        distance: param
      }
    )
    props.forward()
  }

  return (
    <View style={overlayStyle}>
      {phase < 4 && <TouchableWithoutFeedback onPress={backward}>
        <Image source={require('gallivantr/assets/iconBackButton.png')} style={[styles.backButton]} />
      </TouchableWithoutFeedback>}
      {[
        <StartingLocationOverlay forward={forward}/>,
        <DestinationOverlay forward={forward} setDestination={(param) => setDestination(param)} martiniOClock={martiniOClock}/>,
        <TransportOverlay forward={forward} setTransport={(param) => setTransport(param)}/>,
        <DistanceOverlay walkingDistance={transport==='walking'} setDistance={setDistanceProp}/>,
        <Minimized forward={forward}/>,
        <ReviewSelectionPop backward={backward} selections={selections} setPhase={(param) => props.setPhase(param)}/>
      ][phase]}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    height: 50,
    width: 50,
    backgroundColor: '#CEE3DC',
    position: 'relative',
    borderRadius: 100,
    top: -25,
    left: -120
  }
});

export default Interface;
