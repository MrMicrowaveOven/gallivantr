import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Map from './components/Map.js'
import Interface from './components/Interface.js'
// import * as Location from 'expo-location';

// ErrorUtils.setGlobalHandler((error, isFatal) => {
//   if (__DEV__) {
//     // require('ExceptionsManager').handleException(e, isFatal);
//     // alert('DEV')
//   } else {
//     alert("So sorry!  Looks like something's gone wrong.  It's not you it's me!  I'm sure it's being worked on as we speak.")
//   }
// });

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapMargin = 1;
  // const [mapMargin, setMapMargin] = useState(1);

  const [phase, setPhase] = useState(0)

  const [info, setInfo] = useState(null)

  // const [spot, setSpot] = useState(null)

  const [numLocations, setNumLocations] = useState(0)

  const hour = new Date().getHours()
  const [martiniOClock] = useState(hour < 4 || hour >= 15)

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //     }

  //     let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
  //     setLocation(location);
  //   })();
  // });

  const setInfoProps = (infoProps) => {
    setInfo(infoProps)
    setNumLocations(numLocations + 1)
  }

  const forward = () => {
    setPhase(phase + 1)
  }

  const backward = () => {
    setPhase(phase - 1)
  }

  let text = 'Waiting..';
  let latitude = 37
  let longitude = -122
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   latitude = location.coords.latitude
  //   longitude = location.coords.longitude
  //   text = "Your latitude is " + latitude + ", and your longitude is " + longitude + ".";
  // }
  // if(!location) {
  //   return null
  // }

  // const latitudeBufferFirst = 0.015
  // const latitudeBufferSecond = -0.015

  const map = React.createRef()

  return (
    <View style={[styles.container, {marginBottom: mapMargin}]}>
      <Map
        phase={phase}
        location={location}
        info={info}
        numLocations={numLocations}
        openDetails={() => setPhase(6)}
        closeDetails={() => setPhase(4)}
      />
      {/* <Interface
        forward={forward}
        backward={backward}
        phase={phase}
        setPhase={(param) => setPhase(param)}
        setInfo={setInfoProps}
        martiniOClock={martiniOClock}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
