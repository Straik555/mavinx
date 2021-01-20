import React, {useEffect, useState, useContext} from "react";
import {Redirect} from "react-router-dom";

import {
    Banner,
    FormBody,
    Title,
    Text,
    Fieldset
} from './style';
import {CurrentUserContext} from "../../context/currentUser";
import {ACTION} from "../../context/currentUser";
import UseFetch from "../../hooks/UseFetch";
import UseLocalStorage from '../../hooks/UseLocalStorage';
import BackendErrorMessages from "../../components/BackendErrorMessages";

const Authentication = props => {
    const isLogin = props.match.path === '/login';
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
    const descriptionLink = isLogin ? '/register' : '/login';
    const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
    const [userName, setUserName] = useState('');
    const [userSurName, setUserSurName] = useState('');
    const [userNameCustomer, setUserNameCustomer] = useState('');
    const [userRole, setUserRole] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const apiUrl = isLogin ? '/test/login' : '/test/register';
    //const [messages, setMessages] = useState(true)
    const [isSubmitLogin, setIsSubmitLogin] = useState(false)
    const [isSubmitRegister, setIsSubmitRegister] = useState(false)
    const [{response, isLoading, error}, doFetch] = UseFetch(apiUrl);
    const [token, setToken] = UseLocalStorage('tokenMavinx')
    const [, dispatch] = useContext(CurrentUserContext)

    const handleSubmit = event => {
        event.preventDefault()
        const user = isLogin ?
            {email, password} :
            {
                name: userName,
                name_customer: userNameCustomer,
                surname: userSurName,
                email: email,
                phone,
                role: userRole,
                password,
                password_confirmation: passwordConfirmation
            }
        doFetch({
            method: 'post',
            data: user

        })
        // if(response){
        //     setMessages(false)
        //     setTimeout(() => {
        //         setMessages(true)
        //     }, 2500)
        // }
    }

    useEffect(() => {
        if(!response){
            return
        }
        if(isLogin){
            setToken(response.token)
            dispatch({type: ACTION.SET_AUTHORIZED, payload: response.user})
        }
        if(error == null){
                if(isLogin){
                    setIsSubmitRegister(false)
                    setIsSubmitLogin(true)
                } else{
                    setIsSubmitLogin(false)
                    setIsSubmitRegister(true)
                }
        }
    }, [response, error, isLogin, setToken, dispatch])

    if(isSubmitLogin) {
        return <Redirect to={'/main'} />
    }

    if(isSubmitRegister) {
        return <Redirect to={'/'} />
    }

    return (
        <div>
            <div>
                <Banner>
                    <FormBody>
                        <Title>{pageTitle}</Title>
                        <Text
                            to={descriptionLink}
                        >
                            {descriptionText}
                            {/*{*/}
                            {/*    !messages && <p>{response.message}</p>*/}
                            {/*}*/}
                        </Text>
                        <form onSubmit={handleSubmit}>
                            {
                                error !== null && <BackendErrorMessages backendErrors={error} />
                            }
                            {
                                !isLogin &&
                                <>
                                    <Fieldset>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <input
                                            type='text'
                                            placeholder='Surname'
                                            value={userSurName}
                                            onChange={e => setUserSurName(e.target.value)}
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <input
                                            type='text'
                                            placeholder='Name customer'
                                            value={userNameCustomer}
                                            onChange={e => setUserNameCustomer(e.target.value)}
                                        />
                                    </Fieldset>
                                </>
                            }

                            <Fieldset>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Fieldset>
                            {
                                !isLogin &&
                                    <>
                                        <Fieldset>
                                            <input
                                                type='text'
                                                placeholder='Phone'
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </Fieldset>
                                        <Fieldset>
                                            <input
                                                type='number'
                                                placeholder='Role'
                                                value={userRole}
                                                onChange={e => setUserRole(e.target.value)}
                                            />
                                        </Fieldset>
                                    </>
                            }
                            <Fieldset>
                                <input
                                    type='text'
                                    placeholder='Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Fieldset>
                            {
                                !isLogin &&
                                    <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Password Confirmation'
                                        value={passwordConfirmation}
                                        onChange={e => setPasswordConfirmation(e.target.value)}
                                    />
                                </Fieldset>
                            }
                            <Fieldset>
                                <button
                                    type='submit'
                                >
                                        {pageTitle}
                                </button>
                            </Fieldset>
                        </form>
                    </FormBody>
                </Banner>
            </div>
        </div>
    )
}

export default Authentication;