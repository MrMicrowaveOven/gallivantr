import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image} from 'react-native';
import ButtonBox from '../ButtonBox.js'

const ReviewSelectionPop = (props) => {

  const minimize = () => {
    props.backward()
  }

  return(
    <View>
      <TouchableWithoutFeedback onPress={minimize}>
        <View style={styles.minimizeButton}>
          <Image style={styles.minimizeButtonImage} source={require('../../assets/iconDownArrow.png')} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.threeBoxes}>
        <ButtonBox label={'Destination'} icon={props.selections.destination} color={0} handlePress={() => props.setPhase(1)}/>
        <ButtonBox label={'Transport'} icon={props.selections.transport} color={1} handlePress={() => props.setPhase(2)}/>
        <ButtonBox label={'Distance'} icon={props.selections.distance} color={2} handlePress={() => props.setPhase(3)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  threeBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  minimizeButton: {
    height: 30,
    width: 30,
    backgroundColor: '#CEE3DC',
    position: 'relative',
    borderRadius: 100,
    top: -15,
    left: 270,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  minimizeButtonImage: {
    height: 15,
    width: 15,
  }
});

export default ReviewSelectionPop;
