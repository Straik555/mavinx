import React from "react";

import styled, {css} from "styled-components";

const ErrorMessagesUl = styled.ul`
  padding-left: 15px;
`;

const ErrorMessagesLi = styled.li`
 padding: 5px 5px 5px 0;
 text-align: left;
 font-size: 14px;
 font-weight: bold;
 
 ${({theme}) => css`
    color: ${theme.colors.errorMessages};
 `}
`;

const BackendErrorMessages = ({backendErrors}) => {
    if(backendErrors.errors){
        const errorMessages = Object.keys(backendErrors.errors).map(name => {
            const messages = backendErrors.errors[name].join(' ')
            return `${name} ${messages}`
        })
        return <ErrorMessagesUl>
            {errorMessages.map(item => {
                return (
                    <ErrorMessagesLi key={item}>
                        {item}
                    </ErrorMessagesLi>
                )
            })}
        </ErrorMessagesUl>
    }
    return (
        <ErrorMessagesLi>
            {backendErrors.message}
        </ErrorMessagesLi>
    )
}

export default BackendErrorMessages;