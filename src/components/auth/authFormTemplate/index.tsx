import React from 'react';

import { AuthFormTemplateStyle } from './style';



const AuthFormTemplate = ({ children = "",name=""}:{ children?: React.ReactNode
    name?: string
    }) => {

    
    return (
        // Remove action to auth
        <AuthFormTemplateStyle    >
            
                {children}
            
        </AuthFormTemplateStyle>
    )
}

export default AuthFormTemplate;