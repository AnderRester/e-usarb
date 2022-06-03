import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Navigation from './src/components/Navigation';
import Post from './src/components/Post';
import Home from './src/assembly/HomeStack';
import Search from './src/components/Search';
import SearchResults from './src/components/SearchResults';
import SearchRecomendations from './src/components/SearchRecomendations';
import SearchView from './src/assembly/SearchView';
import Svg, { Circle, Rect } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import NavTabs from './src/assembly/NavTabs'
//import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { ChatItem } from "react-chat-elements";

//Main colors: white,  #928a56, #56926d


export default function App() {
  return (
    <NavigationContainer>
      <NavTabs />
      {/* <Chat /> */}
      
    </NavigationContainer>
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
