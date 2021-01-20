import React from 'react';
import {Redirect} from "react-router-dom";

import PageWrapper from "../../components/PageWrapper";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import MainContent from "./MainContant";
import MainFilter from "./MainFilter";

const Main = () => {
    const [token,] = UseLocalStorage('tokenMavinx')
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