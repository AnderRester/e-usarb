import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Stories from '../components/Stories';
import Post from '../components/Post';

const Home = () => {
    return (
        <ScrollView>
            <Stories />
            <Post />
        </ScrollView>
    )
}

export default Home