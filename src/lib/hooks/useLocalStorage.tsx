import React from 'react'
interface IUseLocalStorage {
    key: string;
    initialValue: any;
}
const useLocalStorage = ({ key, initialValue }: IUseLocalStorage) => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    }
    );
    const setValue = (value: any) => {
        try {
            setStoredValue(value);
        }
        catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        window.localStorage
            .setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);
    return [storedValue, setValue];
}
export default useLocalStorage;