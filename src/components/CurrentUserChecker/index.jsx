import {useContext, useEffect} from "react";

import useFetch from '../../hooks/UseFetch'
import {CurrentUserContext} from "../../context/currentUser";
import useLocalStorage from '../../hooks/UseLocalStorage';
import {ACTION} from "../../context/currentUser";

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/test/edit-user')
    const [state, dispatch] = useContext(CurrentUserContext);
    const [token] = useLocalStorage('tokenMavinx');
    console.log('context', state)
    useEffect(() => {

        if(!token){
            dispatch({type: ACTION.SET_UNAUTHORIZED})
            return
        }
        doFetch({
            method: 'post'
        })
        dispatch({type: ACTION.LOADING})
    }, [token, dispatch, doFetch])

    useEffect(() => {
        if(!response) {
            return
        }
        dispatch({type: ACTION.SET_AUTHORIZED, payload: response.user})
    }, [response, dispatch])

    return children
}

export default CurrentUserChecker;