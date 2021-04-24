import React from 'react';
import {
  Text, Platform,
  View, Image, 
  StyleSheet, SafeAreaView, 
  TouchableOpacity, Dimensions
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import wateringImg from '../assets/watering.png';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
    const navigation = useNavigation();
    function handleStart(){
      navigation.navigate('UserIdentification');
    }
    return (
      <SafeAreaView style={style.container} >
          <View style={style.wrapper}>
            <Text style={style.title}>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Text>
            
            <Image 
              style={style.image} 
              source={wateringImg}
              resizeMode="contain"/>
             
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity 
                activeOpacity={0.7}
                style={style.button}
                onPress={handleStart}>
                 
                    <Feather
                      name="chevron-right"
                      style={style.icone}
                    />
                
            </TouchableOpacity>
          </View>
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'?25:0
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  
  icone:{
    fontSize: 32,
    color: 'white'
  }
});