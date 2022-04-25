import React from "react";
import { View, Image, Linking, TouchableOpacity, StyleSheet } from "react-native";

const Navigation = () => {
    return <View style={{ backgroundColor: '#56926d', paddingVertical: 18, paddingHorizontal: 30, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', textAlign: 'center' }}>

        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/home/house.svg')} style={navigationStyles.navIcons}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/search/search.svg')} style={navigationStyles.navIcons}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/like/heart.svg')} style={navigationStyles.navIcons}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
            <Image source={require('../../personalAsset/bookmark/bookmark-fill.svg')} style={navigationStyles.navIcons}/>
        </TouchableOpacity>
    </View>
}

export default Navigation

const navigationStyles = StyleSheet.create({
    navIcons: {
        width: 25,
        height: 25
    }
})