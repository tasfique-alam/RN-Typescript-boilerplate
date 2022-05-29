import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
    /**
     * Get an item
     * @param key {string}
     * @param callback {any}
     */
    getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null> {
        return AsyncStorage.getItem(key, callback);
    }

    /**
     * Set an item
     * @param key {string}
     * @param value {any}
     * @param callback {any}
     */
    setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void> {
        return AsyncStorage.setItem(key, value, callback);
    }

    /**
     * Remove an item
     * @param key {string}
     * @param callback {any}
     */
    removeItem(key: string, callback?: (error?: Error) => void): Promise<void> {
        return AsyncStorage.removeItem(key, callback);
    }

    /**
     * Clear the async storage
     * @param callback {any}
     */
    clear(callback?: (error?: Error) => void): Promise<void> {
        return AsyncStorage.clear(callback);
    }
}

const __Storage = new Storage();

export {__Storage as Storage};
