import React from 'react';
import useTGL from '../../../hooks/useStore';
import { AuthErrorTextStyle } from './style';


const AuthErrorText = () => {
    const { states } = useTGL()
    return(
        <AuthErrorTextStyle messageColor={states.Auth.messageColor}>
            {states.Auth.message}
        </AuthErrorTextStyle>
    )
}

export default AuthErrorText