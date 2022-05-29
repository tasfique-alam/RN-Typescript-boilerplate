export interface IAuthData {
    loggedIn: boolean,
    refresh: string,
    access: string,
    id: number,
    email: string,
    role: string,
}

export const authData: IAuthData = {
    loggedIn: false,
    refresh: "",
    access: "",
    id: 0,
    email: "",
    role: "",
};
