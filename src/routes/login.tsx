import React from 'react';
import Page from '../components/partials/Page';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import useTGL from './../hooks/useStore';
import { AuthLogin } from './../store/actions';
import { UserProps } from '../types/types';
import styled from 'styled-components';


const ButtonText = styled.span<{ Color: String }>`
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

const Login = () => {

    const { states, dispatch } = useTGL()
    const user: UserProps = {
        name: "hugo",
        password: "123"
    }

    const FunctionLogin = (user: UserProps) => {
        dispatch(AuthLogin(user))
        console.log(states.Auth)
    }

    return (
        <Page headerVisible={false}>
            <AuthContainer>
                <div>
                    <h2>Authentication</h2>
                    {/* Form  */}
                    <AuthFormTemplate >
                        <section>
                            <input placeholder="Username"></input>
                            <input placeholder="Password"></input>
                            <Link to="reset-password">I forget my password</Link>
                        </section>
                        <div>
                            <ButtonContainer role="button">
                                <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]}>
                                    <ButtonText Color={"#B5C401"} >Log in</ButtonText>
                                </SimpleButton>
                            </ButtonContainer>
                        </div>
                    </AuthFormTemplate>
                    {/* Add an onclick event here to validate all */}
                    <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50, 40]}>
                        <Link to="/register">
                            Sign Up
                        </Link>
                    </SimpleButton>
                </div>
            </AuthContainer>
        </Page>
    )
}

export default Login;