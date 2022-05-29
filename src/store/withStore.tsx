import React from "react";
import {useStore} from "./useStore";

export function withStore<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
    return (props: P) => {
        const {rootState, setState} = useStore();
        return (
            <React.Fragment>
                <WrappedComponent
                    {...props as P}
                    rootState={rootState}
                    setState={setState}
                />
            </React.Fragment>
        )
    }
}