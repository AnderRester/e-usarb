import React from "react";
import { View, Image, Linking, TouchableOpacity } from "react-native";

const Navigation = () => {
    return <View style={{ backgroundColor: 'grey', paddingVertical: 18, paddingHorizontal: 30, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', textAlign: 'center'}}>

        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/home/house-fill.svg')} style={{
                width: 25,
                height: 25,
            }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/search/search.svg')} style={{
                width: 25,
                height: 25,
            }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/like/heart-fill.svg')} style={{
                width: 25,
                height: 25,
            }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/bookmark/bookmark-fill.svg')} style={{
                width: 25,
                height: 25,
            }} />
        </TouchableOpacity>
    </View>
}

export default Navigation