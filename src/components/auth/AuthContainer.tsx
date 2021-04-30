import React from 'react';
import Page from '../partials/Page';
import styled from 'styled-components';
import TextTitle from '../partials/TextTitle';



const LoginContainer = styled.section`
    width: 100vw;
    max-width: 1200px;
    height: calc(100vh - 82px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px){
        width: 100vw;
        height: auto;
        justify-content: space-around;
        margin-top: 16vh;
    }

    @media screen and (max-width: 800px){
        width: 100vw;
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2vh;
    }

    & div{
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

const TextTitleContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1200px){
        width: auto;
        height: auto;
        justify-content: center;
    }


    & h2{
        width: 350px;
        text-align: center;
        font: italic normal bold 35px/70px "Helvetica Neue Bold";
        letter-spacing: 0px;
        color: #707070;
        margin-bottom: 0px;
    }


`

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