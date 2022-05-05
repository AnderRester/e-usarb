import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Stories from './Stories';
import Post from './Post';

const Main = () => {
    return (
        <ScrollView>
            <Stories />
            <Post />
        </ScrollView>
    )
}

export default Main