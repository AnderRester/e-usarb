// import { Image, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native-svg";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import userList from "../../userList.json";
import Svg, { Path } from "react-native-svg";

const ChatMessages = ({navigation}) => {
    return (
        <View style={{height: '100%'}}>
            <View style={{backgroundColor: '#56926d', flexDirection: 'row', alignItems: "center", paddingVertical: 6, paddingTop: 42}}>
                {/* {User.Name} */}
                <TouchableOpacity style={{marginLeft: 12}} onPress={() => navigation.goBack()}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <Path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" fill={"#3F3F3F"} />
                        </Svg>
                    </TouchableOpacity>
                <Image source={{uri:'https://randomuser.me/api/portraits/men/4.jpg'}} style={{width:45, height:45, borderRadius: 24, marginLeft: 16 }}></Image>
                <View>
                <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500'}}>{userList[0].name}</Text>
                <Text style={{marginLeft: 16, fontSize: 14, fontWeight: '300'}}>Online</Text>
                </View>
            </View>
            <View >
            <ScrollView style={{display: "flex", height: "80%"}}></ScrollView>
            </View>
            <View style={{backgroundColor: '#56926d', flexDirection: 'row', alignItems: "center", paddingVertical: 6, paddingBottom: 22, justifyContent: "space-between", paddingHorizontal: 8, position: 'absolute', bottom: 0}}>
                <TouchableOpacity style={{paddingRight: 2}}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                        <Path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" fill={"#3F3F3F"} />
                    </Svg>
                </TouchableOpacity>
                <TextInput style={{width: '78%', borderRadius: 12, backgroundColor: '#e7e7e7', paddingVertical: 10, paddingLeft: 6}} />
                <TouchableOpacity style={{paddingHorizontal: 6}}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-dizzy" viewBox="0 0 16 16">
                        <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill={"#3F3F3F"} />
                        <Path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill={"#3F3F3F"} />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingRight: 6, paddingLeft: 2}}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <Path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" fill={"#3F3F3F"} />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatMessages