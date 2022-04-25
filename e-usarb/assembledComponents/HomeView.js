import React from 'react';
import { View } from 'react-native';
import Header from '../src/components/Header';
import Stories from '../src/components/Stories';
import Navigation from '../src/components/Navigation';
import Post from '../src/components/Post';

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Header />
            </View>
            <View>
                <Stories />
            </View>
            <View style={{ paddingBottom: 60 }}>
                <Post />
            </View>
            <View style={{ position: "fixed", bottom: 0, width: "100%" }}>
                <Navigation />
            </View>
        </View>
    );
}

export default Home