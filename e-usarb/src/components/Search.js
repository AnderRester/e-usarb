import React from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";

const Search = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 14}}>
            <View style={{ flexDirection: "row", padding: 6, paddingVertical: 10, borderRadius: 10, borderWidth: 0.4, width: "90%", backgroundColor: 'white' }}>
                <Svg width="20" height="20" viewBox="0 0 16 16">
                    <Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#3F3F3F" />
                </Svg>
                <TextInput placeholder="Search" style={{ paddingLeft: 14 }}>
                    
                </TextInput>
            </View>
        </View>
    );
}

export default Search