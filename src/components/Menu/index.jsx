import React, {useState, useContext} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {Icon} from "react-icons-kit";
import {cross} from 'react-icons-kit/icomoon/cross';
import styled, {css, createGlobalStyle} from 'styled-components';
import {userCircle} from 'react-icons-kit/fa/userCircle'

import {CurrentUserContext} from "../../context/currentUser";
import {customMedia} from "../../styles/theme";
import {ACTION} from "../../context/currentUser";
import UseLocalStorage from "../../hooks/UseLocalStorage";

const BodyOverflow = createGlobalStyle`
  body {
    max-height: 100%;
    overflow:hidden;
  }
`;

const Overlay = styled.div`
  display:block;
  flex: 1;
`;


const Hamburger = styled(Icon).attrs({
    icon: userCircle,
    size: 28,
})`
  display: flex !important;
  cursor: pointer;
  `;

const MenuWrap = styled.div`
  display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    transition: 0.3s;
    transform: translateX(100%);
    height: 100%;

 ${({open}) => open && css`
    transform: translateX(0);
`}
`;

const MenuList = styled.div`
  
    width: 250px;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
`;

const MenuLink = styled(NavLink)`
  background: transparent;
  color: rgba(0, 0, 0, 0.808);
  text-decoration: none;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  position: relative;
  
  :hover{
      :before{
        width: 100%;
      }
    }
  
  &.active{
    color: #E92819;
    ${customMedia.lessThan("tablet")`
        background: rgba(255, 118, 118, 0.2);
    `}
  }
`;

const CloseMenu = styled(Icon).attrs({
    icon: cross,
    size: 20
})`
  
    position: absolute;
    top: 18px;
    right: 10px;
    display: block !important;
    cursor: pointer;
  
`;

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [isSuccessfullLogout, setIsSuccessfullLogout] = useState(false)
    const [, dispatch] = useContext(CurrentUserContext);
    const [, setToken] = UseLocalStorage('tokenMavinx')
    const logout = (e) => {
        e.preventDefault()
        setOpen(false)
        setToken('');
        dispatch({type: ACTION.LOGOUT});
        setIsSuccessfullLogout(true)
    }

    if(isSuccessfullLogout){
        return <Redirect to='/' />
    }

    return (
        <div>
            <Hamburger onClick={() => setOpen(true)} />
            <MenuWrap open={open}>
                {open && <BodyOverflow />}
                <Overlay onClick={() => setOpen(false)}/>
                <MenuList>
                    <CloseMenu onClick={() => setOpen(false)} />
                        <MenuLink
                            key={1}
                            to={'/profiles'}
                            onClick={() => setOpen(false)}
                        >
                            Личный кабинет
                        </MenuLink>
                        <MenuLink
                            key={2}
                            to={'/'}
                            onClick={logout}
                        >
                            Выход
                        </MenuLink>
                </MenuList>
            </MenuWrap>
        </div>
    )
}

export default Menu;