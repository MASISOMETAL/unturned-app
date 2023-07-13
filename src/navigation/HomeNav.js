import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, ItemDescriptions, ItemsInItems, ItemsScreen, WeaponList, WeaponsScreen } from "../screens";

const Stack = createNativeStackNavigator()

const HomeNav = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Items"
                component={ItemsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Weapons"
                component={WeaponsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ItemsInItems"
                component={ItemsInItems}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="WeaponsList"
                component={WeaponList}
                options={{
                    //headerShown: false
                    title: ""
                }}
            />
            <Stack.Screen
                name="ItemDescription"
                component={ItemDescriptions}
                options={{
                    //headerShown: false
                    title: ""
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNav

