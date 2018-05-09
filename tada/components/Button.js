import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Sound from 'react-native-sound';

const sound = new Sound('Badum-tss.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
  });

export default class Button extends Component {
    constructor(){
        super();
        this.state = {

        }
        this.onPress = this.onPress.bind(this);
        Sound.setCategory('Playback', true);
    }
    onPress() {
        sound.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
              // reset the player to its uninitialized state (android only)
              // this is the only option to recover after an error occured and use the player again
              sound.reset();
            }
          });
    }
    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={ this.onPress }>
                <Text style={styles.text}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    text: {
        fontSize: 25,
        color: 'white'
    }
});
