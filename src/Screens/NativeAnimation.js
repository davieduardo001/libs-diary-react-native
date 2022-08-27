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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});