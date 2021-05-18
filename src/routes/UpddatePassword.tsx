/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import SimpleButton from '../components/buttons/ArrowButton';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthContainer from '../components/auth/AuthContainer';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UsersResetRegisterSuccess, ValidNewEmail } from '../store/actions';
import useTGL from './../hooks/useStore';
import AuthErrorText from '../containers/auth/AuthErrorText';
import { AuthSetMessage, AuthResetPassword } from './../store/actions';
import { tryUpdatePassword } from '../store/FetchActions/FetchAuth';


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

const UpdatePassword = () => {

    // const ResetValues = useCallback(() => {
    //     let NewValidEmail = {...validEmail}
    //     NewValidEmail.valid = false
    //     setValidEmail(NewValidEmail)

    //     dispatch(UsersResetRegisterSuccess())
    // },[])
    // useEffect(ResetValues,[])

    const { states, dispatch } = useTGL()
    const [validEmail,setValidEmail] = useState({email:"",valid:false})
    

    const resetPass = useRef<HTMLInputElement>(null)
    const resetPass2 = useRef<HTMLInputElement>(null)


    const params:{token:string} = useParams()
    const ResetPassSubmit = () => {
        if(resetPass.current?.value && resetPass2.current?.value){
            if(resetPass.current.value === resetPass2.current.value){
                dispatch(tryUpdatePassword(resetPass.current.value,resetPass2.current.value,params.token))
            }else{
                dispatch(AuthSetMessage("The fields have to be equal","red"))
            }
            
        }else{
            dispatch(AuthSetMessage("Please fill all fields","red"))
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
                            <Fragment>
                                <input placeholder="New Password" type="password" ref={resetPass}  defaultValue=""/>
                                <input placeholder="Repeat Password" type="password" ref={resetPass2}  defaultValue=""/>
                            </Fragment>

                            
                            
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

export default UpdatePassword;