import React, {createContext, useReducer} from 'react';

export const ACTION = {
    LOADING: 'LOADING',
    SET_AUTHORIZED : 'SET_AUTHORIZED',
    SET_UNAUTHORIZED: 'SET_UNAUTHORIZED',
    LOGOUT: 'LOGOUT'
}

export const CurrentUserContext = createContext([{}, () => {}]);

const initialState = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ACTION.SET_AUTHORIZED:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                currentUser: action.payload
            }
        case ACTION.SET_UNAUTHORIZED:
            return{
                ...state,
                isLoggedIn: false
            }
        case ACTION.LOGOUT:
            return {
                ...initialState,
                isLoggedIn: false
            }
        default:
            return state
    }
}

export const CurrentUserProvider = ({children}) => {

    const value = useReducer(reducer, initialState)
    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}