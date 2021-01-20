import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";

import PageWrapper from "../../components/PageWrapper";
import UseFetch from "../../hooks/UseFetch";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import {CurrentUserContext} from "../../context/currentUser";
import {
    Banner,
    FormBody,
    Title,
    Fieldset
} from '../Authentication/style'
import BackendErrorMessages from "../../components/BackendErrorMessages";

const UserProfile = () => {
    const apiUrl = '/test/edit-user'
    const [{response, error}, doFetch] = UseFetch(apiUrl)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [nameCustomers, setNameCustomers] = useState('')
    const [state] = useContext(CurrentUserContext)
    const [token , setToken] = UseLocalStorage('tokenMavinx')
    console.log('role', nameCustomers)
    const handleSubmit = event => {
        event.preventDefault()
        const user = {
            name,
            surname,
            name_customer: nameCustomers,
            role
        }
        console.log('user', user)
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
        if(!state.isLoggedIn) {
            console.log('ni')
            return
        }
        console.log('e')
        setName(state.currentUser.name);
        setSurname(state.currentUser.surname);
        if(state.currentUser.role === 'provider' || state.currentUser.role === 1){
            setRole(1)
            setNameCustomers('')
        } else{
            setRole(2);
        }

        if(state.currentUser.name_customer){
            console.log('op')
            setNameCustomers(state.currentUser.name_customer);
        }
    }, [state])
    if(!token){
        return <Redirect to={'/'} />
    }
    return (
        <PageWrapper>
            <div>
                <div>
                    <Banner>
                        <FormBody>
                            <Title>Your settings</Title>
                            <form onSubmit={handleSubmit}>
                                {
                                    error !== null && <BackendErrorMessages backendErrors={error} />
                                }

                                <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Surname'
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Name customer'
                                        value={nameCustomers}
                                        onChange={e => setNameCustomers(e.target.value)}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <input
                                        type='text'
                                        placeholder='Role'
                                        value={role}
                                        onChange={e => setRole(e.target.value)}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <button
                                        type='submit'
                                    >
                                        but
                                    </button>
                                </Fieldset>

                            </form>
                        </FormBody>
                    </Banner>
                </div>
            </div>
        </PageWrapper>
    )
}

export default UserProfile;