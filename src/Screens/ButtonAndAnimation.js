import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';

export default function ButtonAndAnimation() {

    const [save, setSave] = useState(false)
    const animation = useRef(true)

    function teste() {
        setSave(!save)
        console.log(save)
    }

    useEffect(() => {
        if (animation.current) {
            if (save) {
                animation.current.play(0, 211)
            }
            animation.current == false
        }
        if (animation.current == false) {
            animation.current.play(0, 0)
        }
    }, [save])

    return (
        <View style={ styles.container }>
                <Lottie source={require('../Animation/photosAnimations.json')} autoPlay={false} loop={false} style={{widht: 300, height: 300}} recise ref={animation} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={ teste }>
                        <View style={styles.button}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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

    buttonContainer:{
        backgroundColor: '#000',
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    button: {
        width: 200,
        height: 200,
        backgroundColor: 'olive',
        borderRadius: 100, 
        alignItems: 'center',
        justifyContent: 'center'
    },
});