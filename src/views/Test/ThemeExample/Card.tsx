import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {Theme, ThemeParser, useStyles} from "@/components/hooks/useStyles";

const Card = () => {
    const styles = useStyles(styleSheet);

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Hello</Text>
        </View>
    );
};

const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {
    return StyleSheet.create({
        cardContainer: {
            backgroundColor: theme === "light" ? "#ffffff" : "#000000",
            padding: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardText: {
            color: parseTheme("#000000", "#ffffff"),
            fontSize: 20,
        }
    });
};

export {Card};
