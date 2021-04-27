import React from 'react';
import ArrowRight from '../assets/img/right-arrow.svg'
import styled from "styled-components"
import Fonts from '../styles/fonts';





const ArrowRightStyle = styled.img`
    height: 28px;
    margin-left: 15px;
`

const ButtonStyle = styled.button`
    ${Fonts}
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font: italic normal bold 20px/70px "Helvetica Neue Bold";
    cursor: pointer;
`

const ArrowButton:React.FC = ({children}) => {
    return(
        <ButtonStyle>
            {children}
            <ArrowRightStyle src={ArrowRight}/>
        </ButtonStyle>

    )
}

export default ArrowButton;
