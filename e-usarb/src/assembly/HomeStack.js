import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image, Linking } from 'react-native';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Header from '../components/Header';
import Home from './Home'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Chat from '../components/Chat';
import Svg, { Path } from 'react-native-svg';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={({ navigation }) => ({
                    headerRight: () =>
                        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                            <Svg height="25" width="25" viewBox="0 0 16 16" style={{ marginRight: 12 }}>
                                {/*<Path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" fill="#3F3F3F" />*/}
                                <Path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" fill="#3F3F3F" />
                            </Svg>
                        </TouchableOpacity>,
                    title: "U-Live",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => Linking.openURL('http://usarb.md')}>
                            <Image source={require('../../personalAsset/logo/logo.png')} style={{
                                width: 55,
                                height: 40,
                                marginLeft: 12
                            }} />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: "#56926d"
                    },
                    //header: (props) => <Header />,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="#3F3F3F" />
                                <Path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                })} />
                <Stack.Screen name='ChatView' component={Chat} />
            </Stack.Navigator>
    )
}

export default HomeStack