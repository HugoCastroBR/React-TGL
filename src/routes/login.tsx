import React, { useRef } from 'react';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import useTGL from './../hooks/useStore';
import { UserProps } from '../types/types';
import styled from 'styled-components';
import { AuthLogin } from './../store/actions';
import AuthErrorText from './../components/auth/AuthErrorText';


const ButtonText = styled.span<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
    
    
    
`




const Login = () => {

    const { dispatch } = useTGL()

    // To change ! 
    const user: UserProps & { valid: boolean } = {
        name: "hugo",
        password: "123",
        valid: false
    }

    const loginUsername = useRef<HTMLInputElement>(null)
    const loginPassword = useRef<HTMLInputElement>(null)

    // Call redux action to login
    const FunctionLogin = (user: UserProps, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(loginUsername.current?.value)
        // dispatch(AuthLogin(user))
    }

    const ValidUsername = () => {
        if (loginUsername.current) {
            return loginUsername.current.value.length > 6 && loginUsername.current.value
        } else {
            // show error msg
            return false
        }
    }

    const ValidPassword = () => {
        if (loginPassword.current) {
            return loginPassword.current.value.length > 6 && loginPassword.current.value
        } else {
            // show error msg
            return false
        }

    }

    return (

        <AuthContainer>
            <div>
                <h2>Authentication</h2>
                {/* Form  */}
                <form action="" onSubmit={(event) => FunctionLogin(user, event)}>
                    <AuthFormTemplate name="LoginForm">
                        <section>
                            <input placeholder="Username" ref={loginUsername} onBlur={() => ValidUsername()} />
                            <input placeholder="Password" ref={loginPassword} onBlur={() => ValidPassword()} />
                            <Link to="reset-password">I forget my password</Link>
                        </section>
                        <AuthErrorText>
                            aaaaaaaa
                        </AuthErrorText>
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