import React from 'react';
import {Button, View, useColorScheme} from "react-native";
import {useStore} from "@/store";
import {IAppSettings} from "@/store/States";

const Header = () => {
    const {rootState, setState} = useStore();
    const theme = rootState.appSettings.theme;
    const system = useColorScheme()
    return (
        <View>
            <Button
                title={"Toggle Theme"}
                onPress={() => {
                    setState<IAppSettings>("appSettings", {
                        theme: theme === "light" ? "dark" : "light",
                    })
                }}
            />
            <Button
                title={"Use system settings"}
                onPress={() => {
                    setState<IAppSettings>("appSettings", {
                        theme: system === "dark" ? "dark" : "light",
                    })
                }}
            />
        </View>
    );
};

export {Header};
