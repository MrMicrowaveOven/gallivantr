import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
const Star = (props) => {
  const {amountFilled} = props;
  if (amountFilled === 0) {
    return(<Image source={require('gallivantr/assets/starEmpty.png')} style={styles.star}/>)
  } else if (amountFilled >= 1) {
    return(<Image source={require('gallivantr/assets/starFilled.png')} style={styles.star}/>)
  } else {
    return(<Image source={require('gallivantr/assets/starFilled.png')} style={styles.star}/>)
  }
}

const StarRatingView = (props) => {
  const {score} = props
  return(
    <View style={styles.starRatings}>
      <Star amountFilled={score}/>
      <Star amountFilled={score - 1}/>
      <Star amountFilled={score - 2}/>
      <Star amountFilled={score - 3}/>
      <Star amountFilled={score - 4}/>
    </View>
  )
}

const styles = StyleSheet.create({
  starRatings: {
    flexDirection: 'row'
  },
  star: {
    width: 25,
    height: 25
  }
})

export default StarRatingView;
