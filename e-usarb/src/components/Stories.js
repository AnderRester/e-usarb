import React from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

import { LinearGradient } from "expo-linear-gradient";
import users from '../../userList.json'

const Stories = () => {
    return <ScrollView style={{ flex: 1, flexDirection: 'row', marginTop: 2 }} horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
            <Image source={{ uri: "https://randomuser.me/api/portraits/men/39.jpg" }} style={styles.userImage} />
            <Text style={styles.userName}>Your Story</Text>
        </View>
        <View style={{ position: 'absolute' }}>
            <View style={styles.addStoriesBtnContainer}>
                <Svg height="16" width="16" viewBox="0 0 16 16">
                    <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white" />
                </Svg>
                {/* <Image source={require("../../personalAsset/addStories/plus.svg")} style={styles.addStoriesBtn} /> */}
            </View>
        </View>
        {users.map((item, index) => (
            <View style={{ paddingTop: 2, width: 108, alignItems: 'center' }}>
                <LinearGradient colors={['#bc2a8d', '#e95950', '#fccc63']} style={{ padding: 2, borderRadius: 30 }}>
                    <Image source={{ uri: item.photo }} style={[styles.userImage, { borderWidth: 2 }]} />
                </LinearGradient>
                <Text style={styles.userName}>{item.name}</Text>
            </View>
        ))}
    </ScrollView>
}

export default Stories

const styles = StyleSheet.create({
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2
    },
    userName: {
        textAlign: 'center',
        fontSize: 11,
        textTransform: 'lowercase'
    },
    addStoriesBtn: {
        height: 20,
        width: 20,
    },
    addStoriesBtnContainer: {
        marginTop: 44,
        marginLeft: 54,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#AAAA07',
        borderRadius: 60,
    },
})