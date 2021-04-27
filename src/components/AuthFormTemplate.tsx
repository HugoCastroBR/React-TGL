import React from 'react';
import styled from 'styled-components';
import SimpleButton from '../components/ArrowButton';


type AuthFormTemplateProps = {
    ButtonSendText: string
}

const AuthFormTemplateStyle = styled.form`

    height: 340px;
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
        min-height: 68%;
        overflow: hidden;

    }
    & div{
        max-height: 32%;
        min-height: 32%;
        width: 100%;
        min-width: 350px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & input{
        padding: 0px;
        padding-top: 2px;
        height: 73px;
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
        height: 0px;
        margin-top: 12px;
        min-width: 100%;
        text-align: right;
        margin-left: -30px;
        font: italic normal normal 17px/70px Helvetica Neue Roman;
        letter-spacing: 0px;
        color: #C1C1C1;
        text-decoration: none;  
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


const AuthFormTemplate = ({ ButtonSendText, children = "" }: AuthFormTemplateProps & { children?: React.ReactNode }) => {
    return (
        <AuthFormTemplateStyle action="">
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