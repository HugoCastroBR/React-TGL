import React from 'react';
import Page from './../components/Page';
import styled  from 'styled-components';
import Fonts from '../styles/fonts';
import SimpleButton from '../components/ArrowButton';
import AuthFormTemplate from './../components/AuthFormTemplate';


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
            font: italic normal bold 35px/70px "Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #707070;
            margin-bottom: 0px;
        }
    }
`

const TextContainer = styled.span`
    ${Fonts}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1{
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & :first-child{
        width: 200px;
        margin-bottom: 30px;
        text-align: center;
        font: italic normal bold 65px/70px "Helvetica Neue Bold";
        color: #707070;
    }
    & :nth-child(2){
        background-color: #B5C401;
        height: 40px;
        width: 145px;
        font: italic normal bold 22px/85px "Helvetica Neue Bold";
        color: #FFFFFF;
        border-radius: 100px;
    }

    & :last-child{
        margin-top: 30px;
        text-align: center;
        font: italic normal bold 83px/85px "Helvetica Neue Bold";
        color: #707070;
        text-transform: uppercase;
    }
`


const Login = () => {
    return(
        <Page headerVisible={false}>
            <LoginContainer>

                <div>
                    <TextContainer>
                        <h1>The Greatest App</h1>
                        <h1>for</h1>
                        <h1>Lottery</h1>
                    </TextContainer>
                </div>

                <div>
                    <div>
                        <h2>Authentication</h2>
                        <AuthFormTemplate ButtonSendText={"Log in"}>
                            <input placeholder="Username"></input>
                            <input placeholder="Username"></input>
                            <a href="">I forget my password</a>
                        </AuthFormTemplate>
                        <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50,40]}>Sign Up</SimpleButton>
                    </div>
                </div>

            </LoginContainer>
        </Page>
    )
}

export default Login;