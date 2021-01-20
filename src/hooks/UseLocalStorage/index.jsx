import {useEffect, useState} from "react";

const UseLocalStorage = (key, initialValue = '') => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}

export default UseLocalStorage;