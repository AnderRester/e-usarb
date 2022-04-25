import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../assembledComponents/HomeView';

const screens = {
    Home: {
        screen: Home
    },    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);