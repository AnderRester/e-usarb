import React from "react";
import { View, Image, Linking, TouchableOpacity, Text} from "react-native";

const Header = () => {
    //return <View style={{ backgroundColor: '#928a56', paddingTop: 55, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, textAlign: 'center'}}>
    return <View style={{ backgroundColor: '#56926d', paddingTop: 12, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10}}>
        <View style={{ paddingLeft: 12 }}>
            <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                <Image source={require('../../personalAsset/logo/logo.svg')} style={{
                    width: 55,
                    height: 40,
                }} />
            </TouchableOpacity>
        </View>
        <View><Text style={{fontSize: 24, textAlign: "center", paddingRight: 22, fontWeight: 'bold', color: "#3F3F3F"}}>U-Live</Text></View>
        <View style={{ paddingRight: 20}}>
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