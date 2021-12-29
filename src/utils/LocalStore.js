
export const getData = ( key ) => {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return data;
    } catch {
        return null;
    }
} 


export const saveData = ( key, value ) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        return -1;
    }
} 