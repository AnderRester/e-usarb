import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import post from "../../postList.json"
import Svg, { Circle, Rect } from 'react-native-svg';

const Post = () => {
    return <View>
        {post.map((item, index) => (
            <ScrollView style={{ paddingVertical: 10 }}>
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
                        <Image source={require("../../personalAsset/comments/chat-right-text.svg")} style={{ height: 20, width: 20 }}></Image>
                        <Text style={{ paddingHorizontal: 8 }}>{item.commentsCount}</Text>
                        <Image source={require("../../personalAsset/like/heart.svg")} style={{ height: 20, width: 20 }}></Image>
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