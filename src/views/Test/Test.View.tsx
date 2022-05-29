import React, {useEffect} from 'react';
import {Button, Text, View} from "react-native";
import {withStore} from "@/store/withStore";
import {IRootState} from "@/store/States/rootState";
import {ISetState} from "@/store";
import ThemeExampleView from "@/views/Test/ThemeExample/ThemeExampleView";
import Block from "@/components/core/Block";
import {padding} from "@/utils/padding.Function";

interface ITestViewProps {
    name: string,
    rootState: IRootState['state'],
    setState: ISetState,
}

interface ITestViewState {

}

class TestView extends React.Component<ITestViewProps, ITestViewState> {
    render() {
        return (
            <View>
                <ThemeExampleView />
                <View style={{...padding({left: 30, right: 30})}}>

                </View>
            </View>
        );
    }
}

export default withStore(TestView);
