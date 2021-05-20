import styled from 'styled-components';

export const ProfileContainer = styled.div`
    max-width: 1200px;
    width: 90vw;
`
export const ProfileTitle = styled.div`
    margin: 0px;
    margin-top: 36px;
    display: flex;
    font: italic normal bold 22px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
`
export const ProfileInfos = styled.div`

`

export const ProfileInfosForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
export const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 36px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px){
        margin-left: 0px;
    }
`

export const ProfileInputContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    margin-right: 28px;
    @media screen and (max-width: 500px){
        margin-right: 0px;
    }
    

    & label{
        font: normal bold 22px "Helvetica Neue light";
        color: #707070;
        margin-left: 10px;
    }
    & input{
        font: normal bold 22px "Helvetica Neue light";
        color: #404040;
        max-width: 320px;
        width: 70vw;
        height: 40px;
        padding: 4px 24px;
        padding-top: 6px;
        margin-top: 2px;
        border: 2px solid #DFDFDF;
        border-radius: 14px;
        &::placeholder{
            opacity: 0.9
        }
    }


`

export const ProfileAboutMe = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    margin-right: 28px;
    width: 70vw;
    max-width: 1122px;
    & label{
        font: normal bold 22px "Helvetica Neue light";
        color: #707070;
        margin-left: 6px;
    }
    & textarea{
        margin-left: -8px;
        font: normal bold 22px "Helvetica Neue light";
        color: #404040;
        width: 100%;
        height: 60px;
        padding: 4px 24px;
        padding-top: 6px;
        margin-top: 2px;
        border: 2px solid #DFDFDF;
        border-radius: 14px;

        &::placeholder{
            opacity: 0.9
        }
    }
`

export const ProfileSendFormBtn = styled.button`
    height: 60px;
    width: 200px;
    margin-top: 36px;
    cursor: pointer;
    margin-bottom: 12px;
    border: 0px;
    font: italic normal bold 24px "Helvetica Neue Bold";
    background-color: #F4F4F4;
    border: 2px solid #DFDFDF;
    border-radius: 14px;
    color: #27C383;

`
export const ProfileChangeError = styled.span<{ color: string }>`
    color: ${props => `${props.color}`};
    font: normal bold 20px "Helvetica Neue light";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20px;
`