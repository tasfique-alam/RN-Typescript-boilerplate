import React from "react";
import {StoreContext} from "./StoreContext";
import {IRootState} from "./States";

export type ISetState = <Payload>(key: keyof IRootState['state'], payload: Partial<Payload>) => void;

export function useStore() {
    const stateHolder = React.useContext(StoreContext);
    const {state, setState} = stateHolder;

    function updateState<Payload>(key: keyof IRootState['state'], payload: Partial<Payload>) {
        setState({
            [key]: {
                ...state[key],
                ...payload,
            }
        });
    }

    return {rootState: state, setState: updateState};
}
