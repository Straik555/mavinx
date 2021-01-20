import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

import UseLocalStorage from "../UseLocalStorage";

const UseFetch = url => {
    const api = 'https://prozorro.mavinx.com/api';
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({})
    const [token] = UseLocalStorage('tokenMavinx');

    const doFetch = useCallback((options = {}) => {
            setOptions(options)
            setIsLoading(true)
    }, [])

    useEffect(() => {
        let skipGetResponseAfterDestroy = false;
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? token : ''
                }
            }
        }
        if(!isLoading){
            return
        }

        axios(api + url, requestOptions)
            .then(res => {
                setResponse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.response.data)
                setIsLoading(false)
            })
        return () => {
            skipGetResponseAfterDestroy = true
        }
    }, [isLoading, url, options, token])
    return [{response, isLoading, error}, doFetch]
}

export default UseFetch;