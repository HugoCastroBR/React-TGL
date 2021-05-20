import styled from "styled-components"

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 75px;
    border-bottom: 2px solid #EBEBEB;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div{
        display: flex;
        height: 100%;
        align-items: center;
        & a {
            font: italic normal bold 20px 'Helvetica Neue Bold';
            color: #707070;
            margin-left: 74px;
            text-decoration: none;
            @media screen and (max-width: 600px){
                margin-left: 10px;
            }
            @media screen and (max-width: 400px){
                margin-left: 10px;
                font: italic normal bold 16px 'Helvetica Neue Bold';
            }
        }
    }

`


export const LogoContainer = styled.div`
    
    width: 110px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1{
        height: 100%;
        width: 110px;
        font: italic normal bold 44px/70px 'Helvetica Neue Bold';
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #707070;

        @media screen and (max-width: 600px){
            width: 30px;
            font: italic normal bold 30px/35px 'Helvetica Neue Bold';
        }
    }
    & h1::after{
        position: absolute;
        content: "";
        width: 110px;
        background-color: #B5C401;
        height: 7px;
        border-radius: 6px;
        margin-top: calc(80px - (7px/2));
        
    }
    
`

export const ButtonContainer = styled.div`
    width: 240px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-right: 80px;
    & a {
        margin-right: -116px;
        padding: 0px;
        width: 160px;
        text-decoration: none;

        @media screen and (max-width: 600px){
            width: 130px;
            margin-right: -100px;
        }
        @media screen and (max-width: 400px){
            width: 120px;
            margin-right: -60px;
        }
        
    }
`