import React from 'react';
import styled from 'styled-components';
import SimpleButton from '../components/ArrowButton';




const AuthFormTemplateStyle = styled.form`

    height: auto;
    width: 350px;
    background: #FFFFFF;
    box-shadow: 0px 3px 25px #00000014;
    border: 1px solid #DDDDDD;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    overflow: hidden;


    & section{
        display: flex;
        min-width: 350px;
        flex-direction: column;
        align-items: center;
        overflow: hidden;

    }
    & div{
        overflow: hidden;
        height: 120px;
        min-height: 120px;
        max-height: 120px;
        width: 100%;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        & :hover{
            transition: 0.2s;
            background-color: #EBEBEB;
        }
    }

    & input{
        padding: 0px;
        padding-top: 2px;
        height: 71px;
        width: 290px;
        border: none;
        border-bottom: 2px solid #EBEBEB;
        font: italic normal bold 20px/70px Helvetica Neue Bold;
        padding-left: 30px;
        padding-right: 30px;
        margin: 0px;

    }
    & input::placeholder{
        color: #9D9D9D;
    }

    & a {
        margin-top: 25px;
        margin-bottom: 30px;
        height: 20px;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 150px;
        font: italic normal normal 17px/70px Helvetica Neue Roman;
        letter-spacing: 0px;
        color: #C1C1C1;
        text-decoration: none;  
    }

    & a:hover{
        color: gray;
    }

`

const ButtonText = styled.p<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
    width: 100%;
    
    
`



const ButtonContainer = styled.button`
    border: none;
    background-color: transparent;
    width: 350px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`

type AuthFormTemplateProps = {
    ButtonSendText: string
    Action?: string
}   

const AuthFormTemplate = ({ ButtonSendText, children = "", Action= "" }:
AuthFormTemplateProps & { children?: React.ReactNode }) => {
    return (
        <AuthFormTemplateStyle action={Action}>
            <section>
                {children}
            </section>
            <div>
                <ButtonContainer>
                    <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50,40]}>
                        <ButtonText Color={"#B5C401"} >{ButtonSendText}</ButtonText>
                    </SimpleButton>
                </ButtonContainer>
            </div>
        </AuthFormTemplateStyle>
    )
}

export default AuthFormTemplate;