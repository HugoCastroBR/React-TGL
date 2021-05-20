/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import SimpleButton from '../../components/buttons/arrowButton';
import AuthFormTemplate from '../../components/auth/authFormTemplate';
import AuthContainer from '../../components/auth/authContainer';
import { Link } from 'react-router-dom';

import useTGL from '../../hooks/useStore';
import AuthErrorText from '../../containers/auth/authErrorText';
import { AuthSetMessage } from '../../store/actions';
import { tryResetPassword } from '../../store/FetchActions/FetchAuth';
import { ButtonContainer,ButtonText } from './style';




const ResetPassword = () => {


    const { dispatch } = useTGL()

    
    const resetEmail = useRef<HTMLInputElement>(null)


    const ResetPassSubmit = () => {
        if(resetEmail.current?.value){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(resetEmail.current.value)){
                console.log(resetEmail.current.value)
                dispatch(tryResetPassword(resetEmail.current.value))
            }else{
                dispatch(AuthSetMessage("Invalid Mail","red"))
            }
        }else{
            dispatch(AuthSetMessage("Please fill the email field","red"))
        }
        
            
    }

    const VerifyEmail = () => {
        if(resetEmail.current?.value){
            if(/^[^@]+@\w+(\.\w+)+\w$/.test(resetEmail.current.value)){
                dispatch(AuthSetMessage("","red"))
            }else{
                dispatch(AuthSetMessage("Invalid Mail","red"))
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

                            <input placeholder="Email" type="email" ref={resetEmail} onChange={() => VerifyEmail()}/>

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