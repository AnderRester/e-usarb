import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Header from '../components/Header';

const Home = () => {
    return (
        <ScrollView>
            <Stories />
            <Post />
        </ScrollView>
    )
}

export default Home