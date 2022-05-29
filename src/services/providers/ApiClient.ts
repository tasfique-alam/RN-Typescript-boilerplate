import axios from 'axios'
import {apiConfig} from "@/config/api.config";
import {Storage} from "@/services/providers/Storage";

const axiosInstance = axios.create({
    baseURL: apiConfig.baseURL,
    timeout: apiConfig.timeout,
    headers: {
        'Content-Type': 'application/json'
    }
});

interface InstanceDataParameters {
    useBearerToken?: boolean,
}

const getInstance = async (data: InstanceDataParameters) => {
    const authData: any = await Storage.getItem("__authData");
    const token = authData && authData !== "" ? JSON.parse(authData)?.access : "";

    axiosInstance.interceptors.request.use(
        (config) => {
            if (typeof config !== "undefined" && typeof config.headers !== "undefined") {
                if((data?.useBearerToken === true) && token && token !== "") {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
    
            return config;
        },
        (error) => Promise.reject(error)
    );

    return axiosInstance;
};

const PublicApiClient = {
    async get(url: string) {
        const instance = await getInstance({useBearerToken: false});

        return instance
            .get(url)
            .then((res) =>res)
            .catch((reason) => {Promise.reject(reason)});
    },

    async post(url: string, data: any) {        
        const instance = await getInstance({useBearerToken: false});        
        return instance
            .post(url, data)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async patch(url: string, data: any, config?: any) {
        const instance = await getInstance({useBearerToken: false});

        return instance
            .patch(url, data, config)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async put(url: string, data: any, config?: any) {
        const instance = await getInstance({useBearerToken: false});

        return instance
            .put(url, data, config)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async delete(url: string) {
        const instance = await getInstance({useBearerToken: false});

        return instance
            .delete(url)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },
}

const ApiClient = {
    async get(url: string) {
        const instance = await getInstance({useBearerToken: true});

        return instance
            .get(url)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async post(url: string, data: any) {
        const instance = await getInstance({useBearerToken: true});

        return instance
            .post(url, data)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async patch(url: string, data: any, config?: any) {
        const instance = await getInstance({useBearerToken: true});

        return instance
            .patch(url, data, config)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async put(url: string, data: any, config?: any) {
        const instance = await getInstance({useBearerToken: true});

        return instance
            .put(url, data, config)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },

    async delete(url: string) {
        const instance = await getInstance({useBearerToken: true});

        return instance
            .delete(url)
            .then((res) => res)
            .catch((reason) => Promise.reject(reason));
    },
};

export {ApiClient, PublicApiClient};
