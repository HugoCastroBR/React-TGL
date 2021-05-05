import React from 'react';
import styled from "styled-components"




const FooterStyle = styled.footer`
    width: 100vw;
    background-color: #F7F7F7;
    height: 78px;
    border-top: 2px solid #EBEBEB;
    display: flex;
    align-items: center;
    justify-content: center;

    & span{
        color: #707070;
        font-size: 15px;
        font-family: "Helvetica Neue Roman";
    }
`

const Footer = () => {

    return(
        <FooterStyle>
            <span>
                Copyright 2021   Luby Software
            </span>
        </FooterStyle>
    )

}

export default Footer;