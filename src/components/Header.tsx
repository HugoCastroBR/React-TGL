import React from 'react';
import styled from "styled-components"
import ArrowButton from './ArrowButton';


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

const Header = () => {
    return(
        <HeaderStyle>
            <HeaderContainer>
                <div>
                    <h1>TGL</h1>
                </div>

                <div>
                    <button>Account</button>
                    <ArrowButton>Sair</ArrowButton>
                </div>
            </HeaderContainer>
        </HeaderStyle>
    )
}

export default Header;