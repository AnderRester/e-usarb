import * as React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../assembly/HomeStack";
import Svg, { Path } from "react-native-svg";
import Search from "../components/Search";
import chatPersons from "../../chatPersons.json";


function Chat() {
    return (
        <View style={{backgroundColor: '#8BC9A2' }}>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 12, justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <Path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" fill={"#3F3F3F"} />
                    </Svg>
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 20, fontSize: 18, fontWeight: '700' }}>{chatPersons[0].name}</Text>
                <TouchableOpacity>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <Path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" fill={"#3F3F3F"} />
                        <Path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" fill={"#3F3F3F"} />
                    </Svg>
                </TouchableOpacity>
            </View> */}
            <Search />
            <ScrollView style={{ paddingHorizontal: 12 }}>
                {chatPersons.map((item) =>
                    <TouchableOpacity>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingVertical: 5 }}>
                            <Image source={{ uri: item.photo }} style={{
                                height: 55,
                                width: 55,
                                borderRadius: 30
                            }} />
                            <View>
                                <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
                                <Text style={{ paddingLeft: 20, fontSize: 14, fontWeight: "400" }}>{item.status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView >
        </View >
    )
}

export default Chat