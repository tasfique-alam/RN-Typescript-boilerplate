import React from 'react';
import { StyleSheet, View } from 'react-native'
import { colors } from '../../../config/colors.config';
import { sizes } from '../../../config/fonts.config'

interface IBlock {
    onPress?(): void,
    props?: any,
    flex?: boolean,
    width?: boolean,
    relative?: boolean,
    row?: boolean,
    rowReverse?: boolean,
    column?: boolean,
    center?: boolean,
    middle?: boolean,
    spaceBetween?: boolean,
    spaceAround?: boolean,
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean,
    card?: boolean,
    shadow?: boolean,
    bgWhite?: boolean,
    bgOffwhite?: boolean,
    bgPrimary?: boolean,
    color?: string,
    padding?: any,
    margin?: any,
    animated?: boolean,
    wrap?: boolean,
    style?: {} | []
    children?: any,
    container?: any,
}

const Block: React.FC<IBlock> = (props) => {

    const handleMargins = () => {
        const { margin } = props;
        if (typeof margin === 'number') {
            return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin,
            }
        }

        if (typeof margin === 'object') {
            const marginSize = Object.keys(margin).length;
            switch (marginSize) {
                case 1:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[0],
                        marginBottom: margin[0],
                        marginLeft: margin[0],
                    }
                case 2:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[0],
                        marginLeft: margin[1],
                    }
                case 3:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[1],
                    }
                default:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[3],
                    }
            }
        }
    }

    const handlePaddings = () => {
        const { padding } = props;
        if (typeof padding === 'number') {
            return {
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding,
            }
        }

        if (typeof padding === 'object') {
            const paddingSize = Object.keys(padding).length;
            switch (paddingSize) {
                case 1:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[0],
                        paddingBottom: padding[0],
                        paddingLeft: padding[0],
                    }
                case 2:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[0],
                        paddingLeft: padding[1],
                    }
                case 3:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[1],
                    }
                default:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[3],
                    }
            }
        }
    }

    const {
        flex,
        width,
        relative,
        row,
        rowReverse,
        column,
        center,
        middle,
        spaceBetween,
        spaceAround,
        left,
        right,
        top,
        bottom,
        card,
        shadow,
        bgWhite,
        bgOffwhite,
        bgPrimary,
        color,
        padding,
        margin,
        animated,
        wrap,
        style,
        children,
        container
    } = props;

    const blockStyles = [
        styles.block,
        flex && { flex },
        flex === false && { flex: 0 }, // reset / disable flex
        width && styles.width,
        relative && styles.relative,
        row && styles.row,
        rowReverse && styles.rowReverse,
        column && styles.column,
        center && styles.center,
        middle && styles.middle,
        spaceBetween && styles.spaceBetween,
        spaceAround && styles.spaceAround,
        left && styles.left,
        right && styles.right,
        top && styles.top,
        bottom && styles.bottom,
        margin && { ...handleMargins() },
        padding && { ...handlePaddings() },
        card && styles.card,
        shadow && styles.shadow,
        bgWhite && styles.bgWhite,
        bgOffwhite && styles.bgOffwhite,
        bgPrimary && styles.bgPrimary,
        wrap && styles.wrap,
        container && styles.container,
        color && (styles as any)[color], // predefined styles colors for backgroundColor
        color && !(styles as any)[color] && { backgroundColor: color }, // custom backgroundColor
        style, // rewrite predefined styles
    ];

    return (
        <View style={[blockStyles,{flex: 0}]} {...props}>
            {children}
        </View>
    )
}

export const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    width: {
        width: '100%',
    },
    relative: {
        position: 'relative',
    },
    row: {
        flexDirection: 'row',
    },
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    column: {
        flexDirection: 'column',
    },
    card: {
        borderRadius: sizes.radius,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
    left: {
        alignItems: 'flex-start',
    },
    right: {
        alignItems: 'flex-end',
    },
    top: {
        justifyContent: 'flex-start',
    },
    bottom: {
        justifyContent: 'flex-end',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    shadow: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2,
    },
    bgWhite: {
        backgroundColor: colors.white,
    },
    bgOffwhite: {
        backgroundColor: colors.offwhite,
    },
    bgPrimary: {
        backgroundColor: colors.primary,
    },
    primary: { backgroundColor: colors.primary, },
    black: { backgroundColor: colors.black, },
    white: { backgroundColor: colors.white, },
    gray: { backgroundColor: colors.gray, },
    container: {
        marginLeft: 30,
        marginRight:30
    }
})

export default Block;
