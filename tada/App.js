import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './components/Button';

const buttons = [
  {
    label: 'Drums',
    sound: 'Drums'
  },
  // {
  //   label: 'Gus',
  //   sound: 'Gus'
  // },
  // {
  //   label: 'WC',
  //   sound: 'WC'
  // }
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsWrap}>
          {buttons.map((item, i) =>
            <Button key={i} label={item.label} sound={item.sound} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonsWrap: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
