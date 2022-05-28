import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from "react-native";
import { StyleSheet, View, Button, TouchableOpacity, Image, Linking, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Home from './Home';
import Header from '../components/Header';
import SearchView from './SearchView';
import Likes from './Likes';
import Bookmarks from './Bookmarks';
import Chat from "../components/Chat";
// import Header from '../components/Header';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const NavTabs = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#56926d',
                }
            }}>
            <Tab.Screen name="Home" component={Home}
                options={({ navigation }) => ({
                    headerShown: false,
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
                    // //header: (props) => <Header />,


                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="#3F3F3F" />
                                <Path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                })}
            />
            <Tab.Screen name="Search" component={SearchView}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                }} />
            <Tab.Screen name="Liked posts" component={Likes}
                options={{
                    headerStyle: {
                        backgroundColor: "#56926d",
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                }} />
            <Tab.Screen name="Bookmarks" component={Bookmarks}
                options={{
                    headerStyle: {
                        backgroundColor: "#56926d",
                    },
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                }} />
            {/* <Tab.Screen name="Chat" component={Chat}
                options={{
                    headerStyle: {
                        backgroundColor: "#56926d",
                    },
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Svg width="25" height="25" viewBox="0 0 16 16">
                                <Path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#3F3F3F" />
                            </Svg>
                        </View>
                    )
                }} /> */}
        </Tab.Navigator>
    );
}

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={NavTabs} options={({ navigation }) => ({
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
            <Stack.Screen name='Chat' component={Chat} options={({ navigation }) => ({
                title: "U-Live",
                headerRight: () =>
                    <TouchableOpacity style={{marginRight: 12}} onPress={() => navigation.navigate('Chat')}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <Path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" fill={"#3F3F3F"} />
                            <Path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" fill={"#3F3F3F"} />
                        </Svg>
                    </TouchableOpacity>,
                headerStyle: {
                    backgroundColor: "#8BC9A2",
                },
                headerLeft: () => (
                    <TouchableOpacity style={{marginLeft: 12}} onPress={() => navigation.goBack()}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <Path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" fill={"#3F3F3F"} />
                        </Svg>
                    </TouchableOpacity>
                ),
            })} />
        </Stack.Navigator>
    )
}

export default HomeStack