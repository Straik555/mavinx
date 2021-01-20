import React, {useContext} from 'react';
import {Redirect} from "react-router-dom";

import PageWrapper from "../../components/PageWrapper";
import {CurrentUserContext} from "../../context/currentUser";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import MainContent from "./MainContant";
import MainFilter from "./MainFilter";

const Main = () => {
    const [state] = useContext(CurrentUserContext);
    const [token,] = UseLocalStorage('tokenMavinx')
    console.log('t', token)
    console.log('s', state)
    if(!token){
        return <Redirect to={'/'} />
    }
    return (
        <PageWrapper>
            <div style={{display: 'flex', width: '100%', background: '#f7f7f7', padding: '55px', boxSizing: "border-box", margin: 0}}>
                <MainFilter />
                <MainContent />
            </div>
        </PageWrapper>
    )
}

export default Main;