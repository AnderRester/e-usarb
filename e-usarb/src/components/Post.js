import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import post from "../../postList.json"
import Svg, { Path } from 'react-native-svg';

const Post = () => {
    return <View>
        {post.map((item) => (
            <ScrollView style={{ paddingTop: 10, marginBottom: 40 }}>
                {/*         Header of the post             */}
                <View style={{ flex: 1, backgroundColor: '#8BC9A2', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ padding: 4, width: 52 }}>
                        <LinearGradient colors={['#bc2a8d', '#e95950', '#fccc63']} style={{ padding: 2, borderRadius: 22 }}>
                            <Image source={{ uri: item.photo }} style={[styles.userImage, { borderWidth: 1 }]} />
                        </LinearGradient>
                    </View>
                    <View><Text style={styles.userName}>{item.name}</Text></View>
                </View>
                {/* Post Image */}
                <View style={styles.postImage}>
                    <Image source={{ uri: item.postPicture }} style={styles.postImage} />
                </View>
                {/*                     Post body                   */}
                <View>
                    {/*                 Counters                    */}
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingVertical: 8, paddingLeft: 8 }}>
                        <Svg width="16" height="16" viewBox="0 0 16 16">
                            <Path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" fill="#4F4F4F" />
                            <Path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" fill="#3F3F3F" />
                        </Svg>
                        {/* <Image source={require("../../personalAsset/comments/chat-right-text.svg")} style={{ height: 20, width: 20 }}></Image> */}
                        <Text style={{ paddingHorizontal: 8 }}>{item.commentsCount}</Text>
                        <Svg width="16" height="16" viewBox="0 0 16 16">
                            <Path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" fill="#3F3F3F" />
                        </Svg>
                        {/* <Image source={require("../../personalAsset/like/heart.svg")} style={{ height: 20, width: 20 }}></Image> */}
                        <Text style={{ paddingLeft: 8 }}>{item.likesCount}</Text>
                    </View>
                    {/*             Comments article                 */}
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingLeft: 8 }}>
                        <Text style={{ textTransform: 'lowercase', fontWeight: "bold" }}>{item.comments.name}:</Text>
                        <Text style={{ paddingLeft: 6 }}>{item.comments.articleShort}</Text>
                    </View>
                    {/*         more comments btn                    */}
                    <Text style={{ paddingLeft: 8, fontSize: 12, color: "#848484", fontWeight: '600' }}>Show more</Text>
                </View>
            </ScrollView>
        ))}
        {/* <View style={{}}>

            <View><Text style={{fontSize: 24, textAlign: 'center'}}>U-Live</Text></View>
        </View>
        <View style={{ paddingRight: 24, borderColor: 'red' }}>
        </View> */}
    </View>
}

export default Post

const styles = StyleSheet.create({
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 22,
        borderColor: 'white',
        borderWidth: 1
    },
    userName: {
        // textAlign: 'center',
        fontSize: 16,
        textTransform: 'lowercase',
        paddingLeft: 8
    },
    postImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 3,
    }
})