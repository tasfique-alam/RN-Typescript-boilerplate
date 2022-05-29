import { ApiClient,PublicApiClient } from "@/services/providers";
import { IAuthData } from "@/store/States";
import { Storage } from "@/services/providers";
import { IUserData } from "@/store/States/userData";

export class Auth {
    public static async login(email: string, password: string): Promise<any> {
        const data = {
            email,
            password
        }
        let userDataResponse = null
        const loginResponse = await PublicApiClient.post("/account/token/", JSON.stringify(data));
        if (loginResponse?.data?.access !== '') {
            userDataResponse = await ApiClient.get(`/account/user/${loginResponse?.data?.id}/`);
        }
        console.log(loginResponse);
        
        return {
            loginResponse,
            userDataResponse
        }
    }

    public static setLocalAuthData(authData: IAuthData) {
        return Storage.setItem("__authData", JSON.stringify(authData));
    }
    public static setLocalUserData(userData: IUserData) {
        return Storage.setItem("__userData", JSON.stringify(userData));
    }

    public static getLocalAuthData(): Promise<any> {
        return Storage.getItem("__authData");
    }
    public static getLocalUserData(): Promise<any> {
        return Storage.getItem("__userData");
    }
}
