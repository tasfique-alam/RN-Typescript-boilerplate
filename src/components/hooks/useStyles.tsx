import React from 'react';
import {useStore} from "@/store";
import {IAppSettings} from "@/store/States";

export type Theme = IAppSettings['theme'];
export type ThemeParser = (light: any, dark: any) => any;
type StylesCallback = (theme: IAppSettings['theme'], parseTheme: ThemeParser) => any;

function useStyles(stylesCallback: StylesCallback) {
    const {rootState} = useStore();
    const {appSettings} = rootState;
    const theme = appSettings.theme;

    const parseTheme: ThemeParser = (light: any, dark: any) => {
        if (theme === "dark") {
            return dark;
        }
        return light;
    }

    return stylesCallback(theme, parseTheme);
}

export {useStyles};
