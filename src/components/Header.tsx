import React from 'react';
import styled from "styled-components"
import Fonts from '../styles/fonts';
import SimpleButton from './ArrowButton';


const HeaderStyle = styled.header`
    width: 100vw;
    height: 75px;
    border-bottom: 2px solid #EBEBEB;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const ButtonContainer = styled.div`
    width: 220px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

`


const LogoContainer = styled.div`
    ${Fonts}
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

const Header = () => {
    return(
        <HeaderStyle>
            <HeaderContainer>
                <LogoContainer>
                    <h1>TGL</h1>
                </LogoContainer>
                <ButtonContainer>
                    <SimpleButton Arrow={false} > Account </SimpleButton>
                    <SimpleButton Arrow={true}> Sair </SimpleButton>
                </ButtonContainer>  
            </HeaderContainer>
        </HeaderStyle>
    )
}

export default Header;