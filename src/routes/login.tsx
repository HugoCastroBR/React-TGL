import React, { useCallback, useEffect, useRef } from 'react';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import useTGL from './../hooks/useStore';
import { SavedGame, UserProps } from '../types/types';
import styled from 'styled-components';
import { AuthLogin, AuthSetMessage, UsersResetRegisterSuccess } from './../store/actions';
import AuthErrorText from '../containers/auth/AuthErrorText';


const ButtonText = styled.span<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
`




const Login = () => {

    const { states,dispatch } = useTGL()

    useEffect(() => {
        dispatch(UsersResetRegisterSuccess())
        setMessage('')
    },[])

    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[states.Auth.message])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>  setMessage(),[])



    // To change ! 


    const loginEmail= useRef<HTMLInputElement>(null)
    const loginPassword = useRef<HTMLInputElement>(null)

    // Call redux action to login
    const FunctionLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        console.log(states.Auth.Users)
        if(ValidAllInputs()){
            if(loginEmail.current?.value && loginPassword.current?.value){

                const user:UserProps = {
                    name: loginEmail.current.value,
                    password:  loginPassword.current.value,
                    RecentGames: [] as SavedGame[]
                }
                dispatch(AuthLogin(user))
                setMessage("Tentando entrar...","green")
                setTimeout(() => {
                    if(states.Auth.isAuth){
                        setMessage('Sucesso',"green")
                    }else{
                        setMessage('usuario ou senha invalido',"red")
                    }
                },1000)
            }
        }

    }

    const ValidAllInputs = () => {
        if(validEmail() && ValidPassword()){
            setMessage('')
            return true
        }
    }
    const validEmail = () => {
        if(loginEmail.current?.value){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(loginEmail.current.value)){
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

    // const ValidUsername = () => {
    //     if (loginUsername.current) {
    //         if(loginUsername.current.value.length >= 2){
    //             setMessage('')
    //             return loginUsername.current.value
    //         }else{
    //             setMessage('O nome de usuario deve ter ao menos 2 caracteres')
    //             return false
    //         }
            
    //     } else {
    //         setMessage('O nome de usuario deve ser preenchida')
    //         return false
    //     }
    // }

    const ValidPassword = () => {
        if (loginPassword.current?.value) {
            if(loginPassword.current.value.length >= 6){
                setMessage('')
                return loginPassword.current.value
            }else{
                setMessage('A senha deve ter ao menos 6 caracteres')
                return false
            }
            
        } else {
            setMessage('A senha deve ser preenchida')
            return false
        }
    }

    return (
        <AuthContainer>
            <div>
                <h2>Authentication</h2>
                {/* Form  */}
                <form action="" onSubmit={(event) => FunctionLogin(event)}>
                    <AuthFormTemplate name="LoginForm">
                        <section>
                            <input placeholder="Email" ref={loginEmail} onBlur={() => validEmail()} />
                            <input placeholder="Password" ref={loginPassword} onBlur={() => ValidPassword()} />
                            <Link to="reset-password">I forget my password</Link>
                        </section>
                        <AuthErrorText/>
                        <div>
                            <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]} AuthTemplate={true}>
                                <ButtonText Color={"#B5C401"}>Log in</ButtonText>
                            </SimpleButton>
                        </div>
                    </AuthFormTemplate>
                </form>
                {/* Add an onclick event here to validate all */}
                <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50, 40]}>
                    <Link to="/register">
                        Sign Up
                        </Link>
                </SimpleButton>
            </div>
        </AuthContainer>
    )
}

export default Login;