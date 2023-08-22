import React from 'react';
import {Image, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const Minimized = (props) => {

  const restore = () => {
    props.forward()
  }

  return(
    <View>
      <TouchableWithoutFeedback onPress={restore}>
        <View style={styles.restoreButton}>
          <Image style={styles.restoreButtonImage} source={require('gallivantr/assets/iconUpArrow.png')} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  restoreButton: {
    height: 30,
    width: 30,
    backgroundColor: '#CEE3DC',
    position: 'relative',
    borderRadius: 100,
    top: -15,
    left: 120,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restoreButtonImage: {
    height: 15,
    width: 15,
  }
});

export default Minimized;
