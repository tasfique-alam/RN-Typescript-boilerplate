import {appSettings, IAppSettings} from "./appSettings";
import {authData, IAuthData,} from "@/store/States/authData";
import { IUserData, userData } from "./userData";

export interface IRootState {
    state: {
        appSettings: IAppSettings,
        authData: IAuthData,
        userData: IUserData,
    }
}

export const rootState: IRootState = {
    state: {
        appSettings,
        authData,
        userData
    },
};
