import React from 'react';
import {Link} from "react-router-dom";
import {Icon} from "react-icons-kit";
import {search} from 'react-icons-kit/fa/search'

import Menu from "../Menu";

const PageWrapper = ({children}) => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Link
                        to={'/main'}
                        style={{paddingRight: '20px', textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '18px'}}
                    >Experts</Link>
                    <p style={{padding: '0 30px', width: '1.5px', height: '100%', color: 'silver', fontSize:"18px", fontWeight: 'bold'}}>|</p>
                    <Icon style={{color: 'silver', paddingRight: '5px'}} size={'16'} icon={search}/>
                    <span style={{color: 'silver', fontSize: '14px'}}>
                        Поиск эксперементов, навыки
                    </span>
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{color: 'silver'}}>Эксперты</p>
                    <p style={{padding: '0 20px'}}>Вопросы</p>
                    <p>О нас</p>
                    <p style={{padding: '0 30px', width: '1.5px', height: '100%', color: 'silver', fontSize:"18px", fontWeight: 'bold'}}>|</p>
                    <p>Создать проект</p>
                    <p style={{padding: '0 40px', width: '1.5px', height: '100%', color: 'silver', fontSize:"18px", fontWeight: 'bold'}}>|</p>
                    <Menu />
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper;