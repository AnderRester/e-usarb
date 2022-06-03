import React from "react";
import { View } from "react-native";
import Search from "../components/Search";
import SearchRecomendations from "../components/SearchRecomendations";



const SearchView = () => {
    return (
        <View style={{paddingTop: 55, backgroundColor: "#8BC9A2", paddingBottom: 69}}>
            <Search />
            <SearchRecomendations />
        </View>
    );
}

export default SearchView