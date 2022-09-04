import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Lottie from 'lottie-react-native';

export default function NativeAnimation() {

    const [save, setSave] = useState(false)
    const firstRun = useRef(true)
z
    const teste = () => {
        if (save == false) {
            setSave(true)
            console.log(save)
        } else {
            setSave(false)
            console.log(save)
        }
    }

    const animation = useRef(null)

    useEffect(() => {
        if (save == false) {
            animation.current.play(0, 0)
        } else {
            animation.current.play(0, 164)
        }
        firstRun.current = false
    }, [save])

    return (
        <View style={ styles.container }>
            <View style={styles.square}>
                <Lottie source={require('../Animation/dog.json')} 
                autoPlay={false} 
                loop={false}
                style={{ width: 200, height: 200}}
                resizeMode='cover'
                ref={animation}/>
            </View>
            
            <Button title='teste' onPress={ teste }/>

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

  square: {
    width: 200,
    height: 200,
    backgroundColor: 'cadetblue',
    borderRadius: 25,
  },

  text: {
    backgroundColor: '#000'
  },
});