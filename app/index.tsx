import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Home() {
    return (
        <SafeAreaView>
            <StatusBar/>
            <View>
                <Text>You are in home</Text>
            </View>
        </SafeAreaView>
    )
}