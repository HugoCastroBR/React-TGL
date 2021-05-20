import React, { useEffect, useRef, useState } from 'react';
import Page from '../../components/partials/page/Page';
import api from '../../services/api';
import { UpdateProfile } from '../../store/FetchActions/FetchAuth';
import useTGL from '../../hooks/useStore';
import { UpdateInfos } from '../../types/types';
import { AuthSetMessage } from '../../store/actions';

// Style
import { ProfileContainer, ProfileTitle,ProfileInfosForm,InputsContainer,
    ProfileInputContainer,ProfileAboutMe,ProfileChangeError,ProfileSendFormBtn } from './style';



const Account = () => {

    const { states,dispatch } = useTGL()

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
        SetMessage("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }

    const SetMessage =(msg:string,color:string = "red") => {
        dispatch(AuthSetMessage(msg,color))
    }

    return (
        <Page>
            <ProfileContainer>
                <ProfileTitle>
                    <h1>Profile</h1>
                </ProfileTitle>
                <div>
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
                        <ProfileChangeError color={states.Auth.messageColor}>
                            {states.Auth.message}
                        </ProfileChangeError>
                        <ProfileSendFormBtn>Save</ProfileSendFormBtn>
                    </ProfileInfosForm>
                </div>
            </ProfileContainer>
        </Page>
    )
}

export default Account