import React from "react";
import {IRootState, rootState} from "./States/rootState";

const setState = (payload: Partial<IRootState['state']>) => {

};

export const StoreContext = React.createContext({
    ...rootState,
    setState,
});