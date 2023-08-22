import React, {useEffect} from 'react'
import {TouchableWithoutFeedback, View, Text, StyleSheet, Image} from 'react-native'
import StarRatingView from '../StarRatingView.js'

const DetailsWindow = (props) => {
  const {closeDetailsWindow, spot, photoUrls} = props;

  const addressSplit = spot.formatted_address.split(/,(.+)/)
  const address1 = addressSplit[0]
  const address2 = addressSplit[1].replace(' ', '')

  let dayOfWeek = new Date().getDay()
  dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1
  const openingHoursString = spot.opening_hours.weekday_text[dayOfWeek].replace(':', ',')
                                                                       .replace(/\:00/g,'')
                                                                       .replace(/ A/g,'A')
                                                                       .replace(/ P/g,'P')

  const rating = spot.rating

  return(
    <View style={styles.detailsWindow}>
      <Image source={{uri: photoUrls[0]}} style={styles.locationImage}/>
      <TouchableWithoutFeedback onPress={closeDetailsWindow}>
        <View style={styles.closeButton}>
          <Image source={require('../../assets/marker.png')} style={styles.closeButtonImage}/>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.detailsContent}>
        <View style={styles.detailsTitleContainer}>
          <Text style={styles.detailsTitle}>{spot.name}</Text>
        </View>
        <View style={styles.ratingsContainer}>
          <View style={styles.starRatingViewContainer}>
            <StarRatingView score={rating}/>
          </View>
          <Text style={styles.ratings}>
            {rating % 1 === 0 ? rating + '.0' : rating}
          </Text>
        </View>
        <View style={styles.hoursContainer}>
          <Text style={styles.hours}>
            {openingHoursString}
          </Text>
        </View>
        <View style={styles.contactInfoContainer}>
          <View style={styles.detailsContactContainer}>
            <Text style={styles.contactTitle}>ADDRESS</Text>
            <View style={styles.detailsAddressContainer}>
              <Text style={styles.detailsAddress1}>{address1}</Text>
              <Text style={styles.detailsAddress2}>{address2}</Text>
            </View>
          </View>
          <View style={styles.detailsContactContainer}>
            <Text style={styles.contactTitle}>PHONE</Text>
            <View style={styles.detailsPhoneContainer}>
              <Text style={styles.detailsPhone}>{spot.formatted_phone_number}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ratingsContainer: {
    padding: 20,
    position: 'absolute',
    top: 70,
    width: '85%',
    backgroundColor: '#E5E5E5',
    borderRadius: 5
  },
  ratings: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    position: 'relative',
    left: 200,
    top: -20
  },
  starRatingViewContainer: {
    position: 'relative',
    left: 20,
    top: 0
  },
  hoursContainer: {
    padding: 20,
    position: 'absolute',
    top: 140,
    width: '85%',
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
    borderRadius: 5
  },
  hours: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  detailsPhoneContainer: {
    fontSize: 12,
    color: 'black',
    position: 'relative',
    left: 30
  },
  detailsAddressContainer: {
    fontSize: 12,
    color: 'black',
    position: 'relative',
    left: 30
  },
  detailsContactContainer: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  detailsTitleContainer: {
    backgroundColor: 'black',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 30
  },
  contactInfoContainer: {
    padding: 20,
    position: 'absolute',
    top: 210,
    width: '85%',
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
    borderRadius: 5
  },
  contactTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    width: 80
  },
  locationImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
    backgroundColor: '#CEE3DC'
  },
  closeButtonImage: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  closeButton: {
    backgroundColor: '#CEE3DC',
    height: 48,
    width: 48,
    position: 'absolute',
    top: 20,
    right: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F5E1FD'
  },
  detailsContent: {
    position: 'absolute',
    top: 150,
    alignItems: 'center',
    width: '100%'
  },
  detailsWindow: {
    width: '100%',
    height: '100%',
    backgroundColor: '#98AEB6',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    elevation: 100
  }
})

export default DetailsWindow;
