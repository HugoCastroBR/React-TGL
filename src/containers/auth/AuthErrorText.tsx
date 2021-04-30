import styled from 'styled-components';
import React from 'react';
import useTGL from '../../hooks/useStore';



const AuthErrorTextStyle = styled.p<{messageColor:string}>`
    margin: 0px;
    display: block;
    height: 32px;
    min-width: 100px;
    text-align: center;
    color: ${props => `${props.messageColor}`};
    font:  normal  14px "Helvetica Neue Roman";
    margin-bottom: 5px;
`

const AuthErrorText = () => {
    const { states } = useTGL()
    return(
        <AuthErrorTextStyle messageColor={states.Auth.messageColor}>
            {states.Auth.message}
        </AuthErrorTextStyle>
    )

}

export default AuthErrorText