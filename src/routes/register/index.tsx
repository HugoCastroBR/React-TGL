import React, { useCallback, useEffect, useRef } from 'react';
import SimpleButton from '../../components/buttons/arrowButton';
import AuthFormTemplate from '../../components/auth/authFormTemplate';
import AuthContainer from '../../components/auth/authContainer';
import { Link } from 'react-router-dom';
import AuthErrorText from '../../containers/auth/authErrorText';
import useTGL from '../../hooks/useStore';
import { AuthSetMessage} from '../../store/actions';
import { SavedGame, UserInfos } from '../../types/types';
import { tryRegister } from '../../store/FetchActions/FetchAuth';
import { ButtonText } from '../login/style';








const Register = () => {

    const { states,dispatch } = useTGL()


    const registerUsername = useRef<HTMLInputElement>(null)
    const registerEmail = useRef<HTMLInputElement>(null)
    const registerPassword = useRef<HTMLInputElement>(null)
    const confirmPassword = useRef<HTMLInputElement>(null)

    const setMessage = useCallback((message='',messageColor='red') => {
        dispatch(AuthSetMessage(message,messageColor))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[states.Auth.message])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>  setMessage(),[])

    const FunctionRegister= (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(ValidAllInputs()){
            if(registerUsername.current?.value && confirmPassword.current?.value &&
                registerPassword.current?.value && registerEmail.current?.value){
                const user:UserInfos = {
                    name: registerUsername.current.value,
                    password:  registerPassword.current.value,
                    email: registerEmail.current.value,
                    RecentGames: [] as SavedGame[]
                }
                dispatch(tryRegister(user.name,user.email,user.password,confirmPassword.current.value))
                setMessage('trying to register user...',"green")
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
                setMessage('The username has to be up to 2 characters')
                return false
            }
            
        } else {
            setMessage('The username field have to be filled')
            return false
        }
    }

    const ValidPassword = () => {
        if (registerPassword.current?.value) {
            if(registerPassword.current.value.length >= 6){
                if(confirmPassword.current?.value){
                    if(confirmPassword.current.value === registerPassword.current.value){
                        setMessage('')
                        return registerPassword.current.value
                    }else{
                        setMessage('The passwords are not equal')
                    }
                    
                }else{
                    setMessage('The password confirmation has to be filled')
                }
                
            }else{
                setMessage('The password has to be up to 6 characters')
                return false
            }
            
        } else {
            setMessage('The password field have to be filled')
            return false
        }
    }

    const validEmail = () => {
        if(registerEmail.current?.value){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(registerEmail.current.value)){
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

    return (
        <AuthContainer>
            <div>
                <h2>Registration</h2>
                {/* Form  */}
                <form action="" onSubmit={(event) => FunctionRegister(event)}>
                    <AuthFormTemplate   >
                        <section>
                            <input placeholder="Username" ref={registerUsername}  onBlur={() => ValidUsername()}></input>
                            <input placeholder="Email" ref={registerEmail} type="email" onBlur={() => validEmail()}></input>
                            <input placeholder="Password" ref={registerPassword} type="password" onBlur={() => ValidPassword()}></input>
                            <input placeholder="Confirm password" ref={confirmPassword} type="password" onBlur={() => ValidPassword()}></input>
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