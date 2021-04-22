import React from 'react';
import {Text, View, Image ,StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import userImg from '../assets/plant.png';
//caso use iphone-x use o react-native-iphone-x-helper para colocar uma margem top

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Jose</Text>
            </View>
            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: Platform.OS === 'android'?28:0, //caso use o helper iphone: getStatusBarHeight();
        
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32, 
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 35
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: 'black'
    }
})