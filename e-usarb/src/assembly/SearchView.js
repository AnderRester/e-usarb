import React from "react";
import { View } from "react-native";
import Search from "../components/Search";
import SearchRecomendations from "../components/SearchRecomendations";



const SearchView = () => {
    return (
        <View>
            <Search />
            <SearchRecomendations />
        </View>
    );
}

export default SearchView