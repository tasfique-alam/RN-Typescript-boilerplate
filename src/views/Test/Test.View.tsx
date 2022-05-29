import React, {useEffect} from 'react';
import {Button} from "react-native";
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
            <Block>
                <ThemeExampleView />
                <Block>

                </Block>
            </Block>
        );
    }
}

export default withStore(TestView);
