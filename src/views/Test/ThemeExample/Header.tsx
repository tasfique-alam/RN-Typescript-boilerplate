import React, { useCallback, useEffect, useState } from 'react';
import { Button, View, useColorScheme, Appearance } from "react-native";
import { useStore } from "@/store";
import { IAppSettings } from "@/store/States";

const Header = () => {
    const { rootState, setState } = useStore();
    const theme = rootState.appSettings.theme;
    const system = useColorScheme()
    const [systems, setSystems] = useState(false)

    const themeChangeListener = useCallback(() => {
        if (systems == true) {
            setState<IAppSettings>("appSettings", {
                theme: Appearance.getColorScheme() === "dark" ? "dark" : "light",
            })
        }
    }, [systems]);

    useEffect(() => {
        Appearance.addChangeListener(themeChangeListener);
        return () => Appearance.removeChangeListener(themeChangeListener);
    }, [themeChangeListener]);

    return (
        <View>
            <Button
                title={"Toggle Theme"}
                onPress={() => {
                    setSystems(false)
                    setState<IAppSettings>("appSettings", {
                        theme: theme === "light" ? "dark" : "light",
                    })
                }}
            />
            <Button
                title={"Use system settings"}
                onPress={() => {
                    setSystems(true)
                    setState<IAppSettings>("appSettings", {
                        theme: system === "dark" ? "dark" : "light",
                    })
                }}
            />
        </View>
    );
};

export { Header };
