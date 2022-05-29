import React, { Component } from 'react'
import { Text as Typography, StyleSheet } from 'react-native'
import { colors } from '@/config/colors.config'
import { fonts, sizes } from '@/config/fonts.config'
interface IText {
    onPress?(): void,
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    title?: boolean,
    body?: boolean,
    caption?: boolean,
    header?: boolean,
    small?: boolean,
    size?: number,
    transform?: any,
    middle?: boolean,
    align?: boolean,
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean,
    style?: any,
    height?: any,
    spacing?: any,
    center?: boolean,
    color?: string,
    red?: boolean,
    upperCase?: boolean,
    weight?: boolean,
    light?: boolean,
    medium?: Boolean
    bold?: boolean,
    regular?: boolean,
    white?: boolean,
    line?:any
}


const Text: React.FC<IText> = (props) => {
    const {
        h1,
        h2,
        h3,
        title,
        body,
        caption,
        header,
        small,
        size,
        transform,
        align,
        // styling
        regular,
        bold,
        medium,
        weight,
        light,
        upperCase,
        bottom,
        center,
        right,
        spacing,
        height, // line-height
        // colors
        color,
        red,
        style,
        children,
        white,
        line,
    } = props;

    const textStyles = [
        styles.text,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        title && styles.title,
        white && styles.white,
        body && styles.body,
        caption && styles.caption,
        header && styles.header,
        small && styles.small,
        size && { fontSize: size },
        transform && { textTransform: transform },
        align && { textAlign: align },
        height && { lineHeight: height },
        spacing && { letterSpacing: spacing },
        weight && { fontWeight: weight },
        regular && styles.regular,
        bold && styles.bold,
        medium && styles.medium,
        light && styles.light,
        upperCase && styles.upperCase,
        center && styles.center,
        bottom && styles.bottom,
        right && styles.right,
        color && (styles as any)[color], // predefined styles colors for backgroundColor
        color && !(styles as any)[color] && { color }, // custom backgroundColor
        line && !(styles as any)[line] && { line }, // custom backgroundColor
        // color shortcuts
        style
    ];

    return (
        <Typography style={textStyles} numberOfLines={line} {...props}>
            {children}
        </Typography>
    );
}

const styles = StyleSheet.create({
    // default style
    text: {
        fontSize: sizes.font,
        color: '#000',
        fontFamily: 'Rubik-Regular',
    },
    // Font Weight
    regular: {
        fontFamily: 'Rubik-Regular',
    },
    white: {
        color:colors.white,
    },
    bold: {
        fontFamily: 'Rubik-Bold',
    },
    medium: {
        fontFamily: 'Rubik-Medium',
    },
    light: {
        fontFamily: 'Rubik-Light',
    },
    upperCase: {
        textTransform: "uppercase",
    },
    // position
    center: { textAlign: "center" },
    bottom: { alignSelf: "flex-end" },
    right: { textAlign: "right" },
    // colors
    // fonts
    h1: fonts.h1,
    h2: fonts.h2,
    h3: fonts.h3,
    title: fonts.title,
    body: fonts.body,
    caption: fonts.caption,
    header: fonts.header,
    small: fonts.small
});

export default Text;