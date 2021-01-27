import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";

import PageWrapper from "../../components/PageWrapper";
import UseFetch from "../../hooks/UseFetch";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import {ACTION, CurrentUserContext} from "../../context/currentUser";
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
    const [state, dispatch] = useContext(CurrentUserContext)
    const [token] = UseLocalStorage('tokenMavinx')

    const handleSubmit = event => {
        event.preventDefault()
        const user = {
            name,
            surname,
            name_customer: nameCustomers,
            role
        }

        doFetch({
            method: 'post',
            data: user

        })


    }

    useEffect(() => {
        let skipGetResponseAfterDestroy = false;

        if(!state.isLoggedIn) {
            return
        }

        setName(state.currentUser.name);
        setSurname(state.currentUser.surname);
        if(state.currentUser.role === 'provider' || state.currentUser.role === 1){
            setRole(1)
            setNameCustomers('')
        } else{
            setRole(2);
        }

        if(state.currentUser.name_customer){
            setNameCustomers(state.currentUser.name_customer);
        }
        return () => {
            skipGetResponseAfterDestroy = true
        }
    }, [state])

    if(!token){
        return <Redirect to={'/'} />
    }
    return (
        <PageWrapper>
            <div>
                <div>
                    {
                        !state.isLoggedIn && <h1>Loading...</h1>
                    }
                    {
                        state.isLoggedIn && (
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
                                                save
                                            </button>
                                        </Fieldset>

                                    </form>
                                </FormBody>
                            </Banner>
                        )
                    }
                </div>
            </div>
        </PageWrapper>
    )
}

export default UserProfile;