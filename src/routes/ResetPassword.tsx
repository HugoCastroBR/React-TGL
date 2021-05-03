import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UsersResetRegisterSuccess, ValidNewEmail } from '../store/actions';
import useTGL from './../hooks/useStore';
import AuthErrorText from '../containers/auth/AuthErrorText';
import { AuthSetMessage, AuthResetPassword } from './../store/actions';


const ButtonText = styled.p<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
    width: 100%;
    
    
`

const ButtonContainer = styled.div`
    border: none;
    background-color: transparent;
    width: 350px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`

const ResetPassword = () => {

    const ResetValues = useCallback(() => {
        let NewValidEmail = {...validEmail}
        NewValidEmail.valid = false
        setValidEmail(NewValidEmail)

        dispatch(UsersResetRegisterSuccess())
    },[])
    useEffect(ResetValues,[])

    const { states, dispatch } = useTGL()
    const [validEmail,setValidEmail] = useState({email:"",valid:false})
    
    const resetEmail = useRef<HTMLInputElement>(null)
    const resetPass = useRef<HTMLInputElement>(null)
    const resetPass2 = useRef<HTMLInputElement>(null)

    const VerifyEmail = () => {
        if(resetEmail.current?.value){
            let NewValidEmail = {...validEmail}
            NewValidEmail.email = resetEmail.current.value
            setValidEmail(NewValidEmail)
            console.log("h")
            dispatch(ValidNewEmail(resetEmail.current.value))
        }  
    }

    const ResetPassSubmit = () => {
        if(states.Auth.NewAndValidEmail && validEmail.valid === false){
            if( resetEmail.current?.value ){
                dispatch(AuthSetMessage("","red"))
                console.log("bom d+")
                resetEmail.current.value = ""
                
            }
            
            let NewValidEmail = {...validEmail}
                    NewValidEmail.valid = true
                    setValidEmail(NewValidEmail)
        }else if(validEmail.valid){
            if(resetPass.current?.value && resetPass2.current?.value){
                if(resetPass.current.value === resetPass2.current.value){
                    if(resetPass.current.value.length < 6){
                        dispatch(AuthSetMessage("A senha deve ter ao menos 6 caracteres ","red"))
                    }else{
                        dispatch(AuthResetPassword(validEmail.email,resetPass.current.value))
                        dispatch(AuthSetMessage("Concluido !","green"))
                        dispatch(AuthSetMessage("Senha alterada com sucesso !","green"))
                    }
                }
                else{
                    dispatch(AuthSetMessage("As senhas devem ser iguais","red"))
                }
            }else{
                dispatch(AuthSetMessage("As senhas não devem ser nulas","red"))
            }
        }
    }
    

    return (
        <AuthContainer>
            <div>
                <h2>Reset Password</h2>
                {/* Form  */}
                <form action="" onSubmit={(event) => {
                    event.preventDefault()
                    ResetPassSubmit()
                }}>
                    <AuthFormTemplate   >
                        <section>
                            {validEmail.valid?
                            <Fragment>
                                <input placeholder="New Password" ref={resetPass} onChange={() => VerifyEmail()} defaultValue=""/>
                                <input placeholder="Repeat Password" ref={resetPass2} onChange={() => VerifyEmail()} defaultValue=""/>
                            </Fragment>
                                :
                            <input placeholder="Email" ref={resetEmail} onChange={() => VerifyEmail()}/>
                            }
                            
                            
                        </section>
                        <AuthErrorText/>
                        <div>
                            <ButtonContainer >
                                <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]}>
                                    <ButtonText Color={"#B5C401"} >Send</ButtonText>
                                </SimpleButton>
                            </ButtonContainer>
                        </div>
                    </AuthFormTemplate>
                </form>
                <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50, 40]} ReverseArrow={true}>
                    <Link to="/login">
                        <p>Back</p>
                    </Link>
                </SimpleButton>
            </div>
        </AuthContainer>

    )
}

export default ResetPassword;