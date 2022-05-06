import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from "react-native";
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Home from './Home';
import SearchView from './SearchView';
import Likes from './Likes';
import Bookmarks from './Bookmarks';
import Header from '../components/Header';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function NavTabs() {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#56926d',
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                title: "U-Live",
                header: (props) => <Header />,
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Svg width="25" height="25" viewBox="0 0 16 16">
                            <Path d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="#3F3F3F" />
                            <Path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" fill="#3F3F3F" />
                        </Svg>
                    </View>
                )
            }} />
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
        </Tab.Navigator>
    );
}

export default NavTabs