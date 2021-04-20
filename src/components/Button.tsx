import React from 'react';
import {StyleSheet,Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import colors from '../../styles/colors';

interface TypeButton extends TouchableOpacityProps{
    textContent: string | undefined
}

export function ButtonOpacity({textContent, ...resto}:TypeButton){
    return (
        <TouchableOpacity 
                activeOpacity={0.7}
                style={style.button}
                {...resto}>
                 <Text style={style.contentButton}>
                    {textContent}
                </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10
    },
    contentButton:{
        color: colors.white,
        fontSize: 24
    }
});