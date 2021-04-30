import React, { useCallback, useEffect, useRef } from 'react';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthErrorText from '../containers/auth/AuthErrorText';
import useTGL from './../hooks/useStore';
import { AuthSetMessage, UsersRegister } from './../store/actions';
import { UserInfos, UserProps } from '../types/types';


const ButtonText = styled.span<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
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


const Register = () => {

    const { states,dispatch } = useTGL()


    const registerUsername = useRef<HTMLInputElement>(null)
    const registerEmail = useRef<HTMLInputElement>(null)
    const registerPassword = useRef<HTMLInputElement>(null)

    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[states.Auth.message])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>  setMessage(),[])

    const FunctionRegister= (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(ValidAllInputs()){
            if(registerUsername.current?.value && registerPassword.current?.value && registerEmail.current?.value){
                const user:UserInfos = {
                    name: registerUsername.current.value,
                    password:  registerPassword.current.value,
                    email: registerEmail.current.value
                }
                dispatch(UsersRegister(user))
                
                setMessage('tentando registrar..',"green")
                if(states.Auth.RegisterSuccess){
                    setMessage('Sucesso',"green")
                }else{
                    setMessage('Usuario ou email já cadastrados',"red")
                }
            }
        }

    }

    const ValidAllInputs = () => {
        if(ValidUsername() && ValidPassword() && validEmail()){
            setMessage('')
            return true
        }
    }

    const ValidUsername = () => {
        if (registerUsername.current) {
            if(registerUsername.current.value.length >= 2){
                setMessage('')
                return registerUsername.current.value
            }else{
                setMessage('O nome de usuario deve ter ao menos 2 caracteres')
                return false
            }
            
        } else {
            setMessage('O nome de usuario deve ser preenchida')
            return false
        }
    }

    const ValidPassword = () => {
        if (registerPassword.current?.value) {
            if(registerPassword.current.value.length >= 6){
                setMessage('')
                return registerPassword.current.value
            }else{
                setMessage('A senha deve ter ao menos 6 caracteres')
                return false
            }
            
        } else {
            setMessage('A senha deve ser preenchida')
            return false
        }
    }

    const validEmail = () => {
        if(registerEmail.current?.value){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(registerEmail.current.value)){
                setMessage('')
                return true
            }else{
                setMessage('Email Invalido')
                return false
            }
            
        }else{
            setMessage('O email deve ser preenchido')
            return false
        }
    }

    return (
        <AuthContainer>
            <div>
                <h2>Registration</h2>
                {/* Form  */}
                <form action="" onSubmit={(event) => FunctionRegister(event)}>
                    <AuthFormTemplate   >
                        <section>
                            <input placeholder="Username" ref={registerUsername} onBlur={() => ValidUsername()}></input>
                            <input placeholder="Email" ref={registerEmail} onBlur={() => validEmail()}></input>
                            <input placeholder="Password" ref={registerPassword} onBlur={() => ValidPassword()}></input>
                        </section>
                        <AuthErrorText/>
                        <div>
                            
                                <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true}>
                                    <ButtonText Color={"#B5C401"} >Register </ButtonText>
                                </SimpleButton>
                            
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

export default Register;