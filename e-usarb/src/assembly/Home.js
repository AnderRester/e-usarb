import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Header from '../components/Header';
import Chat from '../components/Chat';

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <Stories />
            <Post />
        </ScrollView>
    )
}

export default Home