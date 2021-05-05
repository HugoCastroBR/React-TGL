import React from 'react';
import Page from '../components/partials/Page';
import styled from 'styled-components';


const ProfileContainer = styled.div`
    max-width: 1200px;
    width: 90vw;
`
const ProfileTitle = styled.div`
    margin: 0px;
    margin-top: 36px;
    display: flex;
    font: italic normal bold 22px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
`
const ProfileInfos = styled.div`

`

const ProfileInfosForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
const InputsContainer= styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 36px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px){
        margin-left: 0px;
    }
`

const ProfileInputContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    margin-right: 28px;
    @media screen and (max-width: 500px){
        margin-right: 0px;
    }
    

    & label{
        font: normal bold 22px "Helvetica Neue light";
        color: #707070;
        margin-left: 10px;
    }
    & input{
        font: normal bold 22px "Helvetica Neue light";
        color: #404040;
        max-width: 320px;
        width: 70vw;
        height: 40px;
        padding: 4px 24px;
        padding-top: 6px;
        margin-top: 2px;
        border: 2px solid #DFDFDF;
        border-radius: 14px;
        &::placeholder{
            opacity: 0.9
        }
    }


`

const ProfileAboutMe = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    margin-right: 28px;
    width: 70vw;
    max-width: 1122px;
    & label{
        font: normal bold 22px "Helvetica Neue light";
        color: #707070;
        margin-left: 6px;
    }
    & textarea{
        margin-left: -8px;
        font: normal bold 22px "Helvetica Neue light";
        color: #404040;
        width: 100%;
        height: 60px;
        padding: 4px 24px;
        padding-top: 6px;
        margin-top: 2px;
        border: 2px solid #DFDFDF;
        border-radius: 14px;

        &::placeholder{
            opacity: 0.9
        }
    }
`
    
const ProfileSendFormBtn = styled.button`
    height: 60px;
    width: 200px;
    margin-top: 36px;
    cursor: pointer;
    margin-bottom: 12px;
    border: 0px;
    font: italic normal bold 24px "Helvetica Neue Bold";
    background-color: #F4F4F4;
    border: 2px solid #DFDFDF;
    border-radius: 14px;
    color: #27C383;

`
const ProfileChangeError = styled.span<{color:string}>`
    color: ${props =>`${props.color}`};
    font: normal bold 16px "Helvetica Neue light";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20px;
`
const Account = () => {
    return(
        <Page>
            <ProfileContainer>

                <ProfileTitle>
                    <h1>Profile</h1>
                </ProfileTitle>
                <ProfileInfos>
                    <ProfileInfosForm action="">
                        <InputsContainer>
                            <ProfileInputContainer>
                                <label htmlFor="usernameInput">Username</label>
                                <input type="text" placeholder="New Username" id="usernameInput"/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="fullNameInput">Full name</label>
                                <input type="text" placeholder="Full name" id="fullNameInput"/>
                            </ProfileInputContainer>

                            <ProfileInputContainer>
                                <label htmlFor="numberInput">Number</label>
                                <input type="text" placeholder="(XX) 9XXXX XXXX" id="numberInput"/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="number2Input">Number 2</label>
                                <input type="text" placeholder="(XX) 9XXXX XXXX" id="number2Input"/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="twitterInput">Twitter</label>
                                <input type="text" placeholder="@twitter" id="twitterInput"/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="twitterInput">Facebook</label>
                                <input type="text" placeholder="Facebook name" id="twitterInput"/>
                            </ProfileInputContainer>
                            
                        </InputsContainer>
                        <ProfileAboutMe>
                            <label htmlFor="aboutMeTextArea">About me</label>
                            <textarea  placeholder="About me" id="aboutMeTextArea"/>
                        </ProfileAboutMe>
                        <ProfileChangeError color="red">

                        </ProfileChangeError>
                        <ProfileSendFormBtn>Save</ProfileSendFormBtn>
                    </ProfileInfosForm>
                </ProfileInfos>
            </ProfileContainer>
        </Page>
    )
}

export default Account