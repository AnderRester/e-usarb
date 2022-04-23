import React from "react";
import { View, Image, Linking, TouchableOpacity, Text } from "react-native";

const Header = () => {
    return <View style={{ backgroundColor: 'grey', paddingTop: 55, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, textAlign: 'center'}}>
        <View style={{ paddingLeft: 18 }}>
            <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                <Image source={{ uri: 'http://www.lnss-projects.pendor.de/img/logos/USARB.png' }} style={{
                    width: 70,
                    height: 55,
                }} />
            </TouchableOpacity>
        </View>
        <View><Text style={{fontSize: 24, fontWeight: 600}}>U-Live</Text></View>
        <View style={{ paddingRight: 24, borderColor: 'red' }}>
            <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                <Image source={require('../../personalAsset/chat/send.svg')} style={{
                    width: 25,
                    height: 25,
                }} />
            </TouchableOpacity>
        </View>
    </View>
}

export default Header