import React, {useState} from 'react';
import {Text, Platform ,View, Image, StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png';
import { ButtonOpacity } from '../components/Button';

export function Welcome(){
    const [visible, setVisible] = useState(false);
    function hadnleVisibility(){
        setVisible(true);
    }
    return (
      <SafeAreaView style={style.container} >
            <Text style={style.title}>Gerencie {'\n'} suas plantas de forma {'\n'} fácil</Text>
            {
                visible?
                <Image style={style.image} source={wateringImg}/>
                :null
            }
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <ButtonOpacity
                textContent=">"/>
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android'?25:0
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  },
  
});