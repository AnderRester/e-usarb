import React from "react";
import { View, Image, Linking, TouchableOpacity, Text, Button } from "react-native";
import Svg, { Path } from 'react-native-svg';
import Chat from "./Chat";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
//import {createNativeStackNavigator} from "react-native-screens/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./Navigation";

const Stack = createStackNavigator();

const Header = ({navigation}) => {
    //return <View style={{ backgroundColor: '#928a56', paddingTop: 55, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, textAlign: 'center'}}>
    return (<View style={{ backgroundColor: '#56926d', paddingTop: 55, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
        <View style={{ paddingLeft: 12 }}>
            <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                <Image source={require('../../personalAsset/logo/logo.png')} style={{
                    width: 55,
                    height: 40,
                }} />
            </TouchableOpacity>
        </View>
        <View><Text style={{ fontSize: 24, textAlign: "center", paddingRight: 22, fontWeight: 'bold', color: "#3F3F3F" }}>U-Live</Text></View>
        <View style={{ paddingRight: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Svg height="25" width="25" viewBox="0 0 16 16">
                    {/*<Path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" fill="#3F3F3F" />*/}
                    <Path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" fill="#3F3F3F"/>
                </Svg>
                {/* <Image source={require('../../personalAsset/chat/send.svg')} style={{
                    width: 25,
                    height: 25,
                }} /> */}
            </TouchableOpacity>
        </View>
    </View>
    )
}


export default Header