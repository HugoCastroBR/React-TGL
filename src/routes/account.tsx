import React, { useEffect, useRef, useState } from 'react';
import Page from '../components/partials/Page';
import styled from 'styled-components';
import api from '../services/api';
import { UpdateProfile } from '../store/FetchActions/FetchAuth';
import useTGL from './../hooks/useStore';
import { UpdateInfos } from '../types/types';


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
const InputsContainer = styled.div`
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
const ProfileChangeError = styled.span<{ color: string }>`
    color: ${props => `${props.color}`};
    font: normal bold 16px "Helvetica Neue light";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20px;
`
const Account = () => {

    const { dispatch } = useTGL()

    type UserRes = {
        id: number
        username: string
        email: string
        phone_number: string
        about: string
    }

    const usernameInput = useRef<HTMLInputElement>(null)
    const numberInput = useRef<HTMLInputElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const passwordInput2 = useRef<HTMLInputElement>(null)
    const aboutMeTextArea = useRef<HTMLTextAreaElement>(null)

    const [userInfos, SetUserInfos] = useState({} as UserRes)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(typeof (token) === "string"){
            api.defaults.headers.Authorization = `Bearer ${token}`
            api.get("/user")
                .then((res) => {
                    SetUserInfos({...res.data[0]})
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }, [])

    const SetNewProfileInfos = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const Infos:UpdateInfos = {
            phone_number: numberInput.current?.value,
            password: passwordInput.current?.value,
            password_confirmation: passwordInput2.current?.value,
            username: usernameInput.current?.value,
            email: emailInput.current?.value,
            about: aboutMeTextArea.current?.value
        }
        dispatch(UpdateProfile(Infos))
        console.log(Infos)
    }

    return (
        <Page>
            <ProfileContainer>

                <ProfileTitle>
                    <h1>Profile</h1>
                </ProfileTitle>
                <ProfileInfos>
                    <ProfileInfosForm onSubmit={event =>  SetNewProfileInfos(event)}>
                        <InputsContainer>
                            <ProfileInputContainer>
                                <label htmlFor="usernameInput">Username</label>
                                <input ref={usernameInput} type="text" placeholder="New Username" id="usernameInput" defaultValue={userInfos.username}/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="numberInput">Number</label>
                                <input ref={numberInput} type="text" placeholder="(XX) 9XXXX XXXX" id="numberInput" defaultValue={userInfos.phone_number}/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="emailInput">Email</label>
                                <input ref={emailInput} type="email" placeholder="Email" id="emailInput" defaultValue={userInfos.email}/>
                            </ProfileInputContainer>
                            <ProfileInputContainer>
                                <label htmlFor="passwordInput">New Password</label>
                                <input ref={passwordInput} type="password" placeholder="New Password" id="PasswordInput" defaultValue=""/>
                            </ProfileInputContainer>

                            <ProfileInputContainer>
                                <label htmlFor="passwordInput2">New Password Confirmation</label>
                                <input ref={passwordInput2} type="password" placeholder="Confirm Password" id="PasswordInput2" defaultValue=""/>
                            </ProfileInputContainer>

                        </InputsContainer>
                        <ProfileAboutMe>
                            <label htmlFor="aboutMeTextArea">About me</label>
                            <textarea ref={aboutMeTextArea} placeholder="About me" id="aboutMeTextArea" defaultValue={userInfos.about}/>
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