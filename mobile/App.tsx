import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout , PROVIDER_GOOGLE} from 'react-native-maps';

import mapMarker from './src/images/mapmarker.png';
import {useFonts} from 'expo-font';
import Routes from './src/routes';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'
import { Feather} from '@expo/vector-icons';


export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });
  if(!fontLoaded){
    return null;
  }
  return (
    <Routes />
  );
}