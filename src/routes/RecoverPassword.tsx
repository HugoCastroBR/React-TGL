import React from 'react';
import Page from './../components/Page';
import SimpleButton from '../components/ArrowButton';
import AuthFormTemplate from './../components/AuthFormTemplate';
import AuthContainer from '../components/AuthContainer';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    return(
        <Page headerVisible={false}>
            <AuthContainer>
                <div>
                    <h2>Reset Password</h2>
                    {/* Form  */}
                    <AuthFormTemplate ButtonSendText={"Send Link"} Action="" > 
                        
                        <input placeholder="Email"></input>
                        
                    </AuthFormTemplate>
                    <SimpleButton Arrow={true} FontSize={35} ArrowSize={[50, 40]} ReverseArrow={true}>
                        <Link to="/login">
                            <p>Back</p>
                        </Link>
                    </SimpleButton>
                </div>
            </AuthContainer>
        </Page>
    )
}

export default RecoverPassword;