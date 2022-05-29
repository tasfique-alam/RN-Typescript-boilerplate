import React from 'react';
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { Theme, ThemeParser, useStyles } from "@/components/hooks";
import Block from '../Block';
import { colors } from '@/config';

interface ILoaderProps {
    size?: any,
    color?: any,
}

const Loader: React.FC<ILoaderProps> = ({ size, color }) => {
    const styles = useStyles(styleSheet);

    return (
        <Block style={styles.container}>
            <ActivityIndicator size={size ? size : "small"} color={color ? color : colors.primary} />
            {/* <Image style={{width:50, height:50}} source={require('../../../static/new/ideezaLoader.gif')}/> */}
        </Block>
    );
};

const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex:999
        },
    });
};

export { Loader };
