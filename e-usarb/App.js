import React from 'react';
import {View} from 'react-native';
import HomeView from './assembledComponents/HomeView';
import Navigator from './routes/homeStack'

//Main colors: white,  #928a56, #56926d

export default function App() {
  return (
    <View>
      <HomeView />
      {/* <Navigator /> */}
    </View>
  );
}