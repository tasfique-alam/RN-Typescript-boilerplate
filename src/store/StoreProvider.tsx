import React from "react";
import {IRootState, rootState} from "./States/rootState";
import { StoreContext } from "./StoreContext";

export function StoreProvider(props: { children: React.ReactNode }) {
    const [state, setState] = React.useState(rootState);

    const updateState = (payload: Partial<IRootState['state']>) => setState({
        ...state,
        state: {
            ...state.state,
            ...payload,
        }
    });

    const value = {state: state.state, setState: updateState};

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}