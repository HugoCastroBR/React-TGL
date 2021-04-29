import React from 'react';
import Page from '../components/partials/Page';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

const RecoverPassword = () => {
    return(
        <Page headerVisible={false}>
            <AuthContainer>
                <div>
                    <h2>Reset Password</h2>
                    {/* Form  */}
                    <AuthFormTemplate   > 
                        
                        <section>
                            <input placeholder="Email"></input>
                        </section>
                        <div>
                            <ButtonContainer >
                                <SimpleButton Arrow={true} Color={"#B5C401"} ArrowSize={[50, 40]}>
                                    <ButtonText Color={"#B5C401"} >Log in</ButtonText>
                                </SimpleButton>
                            </ButtonContainer>
                        </div>
                        
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