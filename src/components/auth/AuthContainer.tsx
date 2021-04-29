import React from 'react';
import Page from '../partials/Page';
import styled  from 'styled-components';
import TextTitle from '../partials/TextTitle';



const LoginContainer = styled.section`
    width: 1200px;
    height: calc(100vh - 82px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div{
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h2{
            width: 350px;
            text-align: center;
            font: italic normal bold 35px/70px "Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #707070;
            margin-bottom: 0px;
        }
    }
`

const AuthContainer = ({children}:{children:React.ReactNode}) => {
    return(
        <Page headerVisible={false}>
            <LoginContainer>
                <div>
                    <TextTitle/>
                </div>
                <div>
                    {children}
                </div>

            </LoginContainer>
        </Page>
    )
}


export default AuthContainer;