import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Navigation from './src/components/Navigation';
import Post from './src/components/Post';
import Main from './src/components/Main';
import Svg, { Circle, Rect } from 'react-native-svg';

//Main colors: white,  #928a56, #56926d

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header />
      </View>
      <View style={{flex: 1, paddingBottom: 70}}>
        <Main />
      </View>
      <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <Navigation />
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
});
