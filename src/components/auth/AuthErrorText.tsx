import styled from 'styled-components';
import React from 'react';



const AuthErrorTextStyle = styled.p`
    margin: 0px;
    display: block;
    height: 20px;
    min-width: 100px;
    text-align: center;
    color: red;
    font:  normal  20px "Helvetica Neue Roman";
    margin-bottom: 5px;
`

const AuthErrorText = ({children}:{children:React.ReactNode}) => {

    return(
        <AuthErrorTextStyle>
            {children}
        </AuthErrorTextStyle>
    )

}

export default AuthErrorText