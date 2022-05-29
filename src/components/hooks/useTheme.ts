import React from 'react';
import {useStore} from '@/store';
import {IAppSettings} from '@/store/States';

type Theme = IAppSettings['theme'];
type ThemeParser = (light: any, dark: any) => any;

function useTheme() {
  const {rootState} = useStore();
  const {appSettings} = rootState;
  const theme = appSettings.theme();

  const parseTheme: ThemeParser = (light: any, dark: any) => {
    if (theme === 'dark') {
      return dark;
    }

    return light;
  };

  return {theme, parseTheme};
}

export {useTheme};
