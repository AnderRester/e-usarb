import React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";

import recomendations from '../../searchRecomendationsList.json'

const SearchRecomendations = () => {
    return (
        <ScrollView style={{ paddingTop: 30, width: "100%" }}>
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                paddingLeft: "1.6%"
            }}>
                {recomendations.map((item) => (
                    <TouchableOpacity>
                        <Image source={{ uri: item.photo }} style={{ width: 100, maxWidth: 200, height: 100, maxHeight: 200}} />
                    {/* <View style={{ flex: 1, flexWrap: "wrap", marginTop: 8, flexDirection: "row" }}>
                    </View> */}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

export default SearchRecomendations