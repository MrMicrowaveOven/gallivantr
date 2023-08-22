import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import DetailsWindow from 'gallivantr/components/overlays/DetailsWindow.js'

const Map = (props) => {
  const {location, info, numLocations, phase, openDetails, closeDetails} = props

  const mapMargin = 1
  const [spot, setSpot] = useState(null);
  const [photoUrls, setPhotoUrls] = useState([])

  useEffect(() => {
    showLocationAndSpot()
  }, [spot])

  const handleMarkerPress = () => {
    openDetails()
  }

  const closeDetailsWindow = () => {
    closeDetails()
    showLocationAndSpot()
  }

  const getPhotoUrlsFromRef = (photoReference) => {
    const baseUrl = 'https://maps.googleapis.com/maps/api/place/photo?'
    const key = 'key=AIzaSyAPfLWHecM89XlvxgFjNFxt-4yxKfLjynU'
    const photoId = '&photoreference=' + photoReference
    const width = '&maxwidth=400'
    const url = baseUrl + key + photoId + width
    fetch(url)
      .then((response) => {
        addFirstPhotoUrlToSpot(response.url)
      })
  }

  const getDetails = (id) => {
    const baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json?'
    const placeId = 'place_id=' + id
    const fields = '&fields=name,photo,geometry,url,formatted_address,formatted_phone_number,opening_hours,rating'
    const key = '&key=AIzaSyAPfLWHecM89XlvxgFjNFxt-4yxKfLjynU'

    const url = baseUrl + placeId + fields + key

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setSpot(json.result)
      })
  }

  const addFirstPhotoUrlToSpot = (url) => {
    setPhotoUrls([url])
  }

  const addFurtherPhotoUrlsToSpot = () => {

  }

  const showLocationAndSpot = () => {
    if(spot){
      const latitude = location.coords.latitude
      const longitude = location.coords.longitude

      const spotLatitude = spot.geometry.location.lat
      const spotLongitude = spot.geometry.location.lng

      mapRef.current.fitToCoordinates([
        {latitude: latitude, longitude: longitude},
        {latitude: spotLatitude, longitude: spotLongitude},
      ], {edgePadding: {
        top: 200,
        left: 100,
        right: 100,
        bottom: phase === 4 ? 300 : 500
      }})
    }
  }

  const refreshLocation = () => {
    getSpotFromInfo()
  }

  const zoomCloser = () => {
    mapRef.current.animateToRegion({
      latitude: latitude + latitudeBufferSecond,
      longitude: longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.02
    })
  }

  const zoomToOriginal = () => {
    mapRef.current && mapRef.current.animateToRegion({
      latitude: latitude + latitudeBufferFirst,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }

  const centerZoom = () => {
    mapRef.current.animateToRegion({
      latitude: latitude + latitudeBufferpop,
      longitude: longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.02,
    })
  }

  if(!location) {
    return null
  }

  const latitude = location.coords.latitude
  const longitude = location.coords.longitude

  const latitudeBufferFirst = 0.015
  const latitudeBufferSecond = -0.017
  const latitudeBufferpop = -0.0025

  const mapRef = useRef()

  if([1,2,3].indexOf(phase) !== -1) {
    zoomCloser()
  } else if (phase == 0) {
    zoomToOriginal()
  } else if (phase == 4) {
    // centerZoom()
  }

  useEffect(() => {
    if(info){
      getSpotFromInfo()
    }
  }, [numLocations])

  const getSpotFromInfo = () => {
    setPhotoUrls([])
    const {destination, transport, distance} = info;

    const destinationType = {
      food: 'restaurant',
      'drink-bar': 'bar',
      'drink-cafe': 'cafe',
      random: ['restaurant', 'bar', 'park', 'tourist_attraction'][Math.floor(Math.random() * 4)],
      recreation: 'park',
      landmarks: 'tourist_attraction',
    }[destination]

    const urlBase = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const key = 'key=AIzaSyAPfLWHecM89XlvxgFjNFxt-4yxKfLjynU'
    const location = '&location=' + latitude + ',' + longitude
    const radius = '&radius=' + (parseInt(distance) * 1600)
    const openNow = '&opennow=true'
    const type = '&type=' + destinationType

    let url = urlBase + key + location + radius + type
    url += openNow

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const numResults = json.results.length;
        if(numResults > 0) {
          const randomPick = Math.floor(Math.random() * numResults);
          const decidedSpot = json.results[randomPick]
          getDetails(decidedSpot.place_id)
          getPhotoUrlsFromRef(decidedSpot.photos[0].photo_reference)
        } else {
        }
      })
    }

  const showMapButtons = (phase === 4 || phase === 5) && spot



  return (
    <View style={[styles.container, {marginBottom: mapMargin}]}>
      {showMapButtons &&  <TouchableWithoutFeedback onPress={showLocationAndSpot}>
                            <View style={styles.recenterButton}>
                              <Image
                                style={styles.recenterImage}
                                source={require("gallivantr/assets/recenter.png")}
                              />
                            </View>
                          </TouchableWithoutFeedback>}
      {showMapButtons &&  <TouchableWithoutFeedback onPress={refreshLocation}>
                            <View style={styles.refreshButton}>
                              <Image
                                style={styles.refreshImage}
                                source={require("gallivantr/assets/refresh.png")}
                              />
                            </View>
                          </TouchableWithoutFeedback>}
      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={{
          latitude: latitude + latitudeBufferFirst,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {spot && <Marker
                    onPress={handleMarkerPress}
                    coordinate={{
                      latitude: spot.geometry.location.lat,
                      longitude: spot.geometry.location.lng }}
                  />}

      </MapView>
      {phase === 6 && <DetailsWindow spot={spot} photoUrls={photoUrls} closeDetailsWindow={closeDetailsWindow}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  refreshButton: {
    position: 'absolute',
    top: 20,
    right: 0,
    width: 48,
    height: 48,
    backgroundColor: '#CEE3DC',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refreshImage: {
    width: 35,
    height: 35,
  },
  recenterButton: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 48,
    height: 48,
    backgroundColor: '#CEE3DC',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recenterImage: {
    width: 35,
    height: 35,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

export default Map;
