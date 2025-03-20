import { Stack } from "expo-router";
import SignIn from "./signin";

export default function AuthLayout (){
    return (
        <Stack>
            <Stack.Screen name="signUp" options={{headerShown:false}}/>
            <Stack.Screen name="signIn"/>
        </Stack>
    )
}