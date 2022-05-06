import React from "react";
import { View, Image, Linking, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from 'react-native-svg';

const Header = () => {
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
            <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                <Svg height="25" width="25" viewBox="0 0 16 16">
                    <Path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" fill="#3F3F3F" />
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