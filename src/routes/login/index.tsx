import React, { useCallback, useEffect, useRef } from 'react';
import SimpleButton from '../../components/buttons/arrowButton';
import AuthFormTemplate from '../../components/auth/authFormTemplate';
import AuthContainer from '../../components/auth/authContainer';
import { Link } from 'react-router-dom';
import useTGL from '../../hooks/useStore';
import { AuthSetMessage, UsersResetRegisterSuccess } from '../../store/actions';
import AuthErrorText from '../../containers/auth/authErrorText';
import { tryAuth } from '../../store/FetchActions/FetchAuth';
import { ButtonText } from './style';







const Login = () => {

    const { states,dispatch } = useTGL()

    useEffect(() => {
        dispatch(UsersResetRegisterSuccess())
        setMessage('')
        document.title = "TGL | Login"
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        if(ValidAllInputs()){
            if(loginEmail.current?.value && loginPassword.current?.value){

                const user:{name:string,password:string} = {
                    name: loginEmail.current.value,
                    password:  loginPassword.current.value
                }

                dispatch(tryAuth(user.name,user.password))
                setMessage("Tentando entrar...","green")

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
                setMessage('Invalid Email')
                return false
            }
            
        }else{
            setMessage('The Email field have to be filled')
            return false
        }
    }


    const ValidPassword = () => {
        if (loginPassword.current?.value) {
            if(loginPassword.current.value.length >= 6){
                setMessage('')
                return loginPassword.current.value
            }else{
                setMessage('The password has to be up to 6 characters')
                return false
            }
            
        } else {
            setMessage('The password field have to be filled')
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
                            <input placeholder="Email" type="email" ref={loginEmail} onBlur={() => validEmail()} />
                            <input placeholder="Password" type="password" ref={loginPassword} onBlur={() => ValidPassword()} />
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