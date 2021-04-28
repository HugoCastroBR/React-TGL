import React from 'react';
import Page from './../components/Page';
import SimpleButton from '../components/ArrowButton';
import AuthFormTemplate from './../components/AuthFormTemplate';
import AuthContainer from '../components/AuthContainer';
import { Link } from 'react-router-dom';




const Login = () => {
    return (
        <Page headerVisible={false}>
            <AuthContainer>
                <div>
                    <h2>Authentication</h2>
                    {/* Form  */}
                    <AuthFormTemplate ButtonSendText={"Log in"} Action="/" > 
                        <input placeholder="Username"></input>
                        <input placeholder="Password"></input>
                        <Link to="reset-password">I forget my password</Link>
                    </AuthFormTemplate>
                    <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50, 40]} >
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