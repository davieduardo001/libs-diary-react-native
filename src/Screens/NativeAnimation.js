import React from 'react';
import {StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

export default function NativeAnimation() {
  return (
    <View style={ styles.container }>
      <Lottie 
        source={require('../Animation/photos.json')}/>
    </View>
  );
}

const SIZE = 100.0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'codetblue',
  },
});