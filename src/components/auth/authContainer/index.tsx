import React from 'react';
import Page from '../../partials/page/Page';

import TextTitle from '../../partials/textTitle/TextTitle';
import { LoginContainer, TextTitleContainer } from './style';





const AuthContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Page headerVisible={false}>
            <LoginContainer>
                <TextTitleContainer>
                    <TextTitle />
                </TextTitleContainer>
                <div>
                    {children}
                </div>

            </LoginContainer>
        </Page>
    )
}


export default AuthContainer;