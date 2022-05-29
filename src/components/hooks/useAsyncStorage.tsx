import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(key: string, initialValue: any, json: boolean = false) {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(() => {
        AsyncStorage.getItem(key)
            .then((value) => {
                if (value === null) return initialValue;
                return json ? JSON.parse(value) : value;
            })
            .then(setStoredValue)
    }, [key, initialValue]);

    const setValue = (value: any, callback: (() => void) | undefined = undefined) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        AsyncStorage.setItem(key, json ? JSON.stringify(valueToStore) : valueToStore.toString()).then(callback);
    };

    return [storedValue, setValue];
}
