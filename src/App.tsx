import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, I18nManager } from 'react-native'
import Routes from './router'
import { NavigationContainer } from '@react-navigation/native'
import { StoreProvider } from "@/store/StoreProvider";
import { Startup } from "@/components/startup";

const App = () => {


    const MyStatusBar = ({ backgroundColor, ...props }: any) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    );

    try {
        I18nManager.allowRTL(false);
    }
    catch (e) {
        console.log(e);
    }

    return (
        <React.Fragment>
            <StoreProvider>
                <Startup>
                    <NavigationContainer>
                        <MyStatusBar backgroundColor="white" barStyle="dark-content" />
                        <SafeAreaView style={[styles.safeAreaView]}>
                            <Routes />
                        </SafeAreaView>
                    </NavigationContainer>
                </Startup>
            </StoreProvider>
        </React.Fragment>
    );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;


const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
})

export default App;
