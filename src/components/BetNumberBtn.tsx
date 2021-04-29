import styled from 'styled-components';
import React from 'react';

const BetNumberBtnStyle = styled.button`
    width: 64px;
    height: 64px;
    border: 0px;
    background-color: #ADC0C4;
    border-radius: 100px;
    color: white;
    font: normal normal bold 20px "Helvetica Neue Bold";
    cursor: pointer;
    margin-right: 12px;
    margin-bottom: 12px;
    transition: 0.2s;
    :hover{
        transition: 0.2s;
        background-color: #8da3a7;
    }
`


type BetNumberBtnProps = {
    number: number
}

const BetNumberBtn = ({number}:BetNumberBtnProps) => {
    return(
        <BetNumberBtnStyle>
            {number <= 9? `0${number}`: number }
        </BetNumberBtnStyle>
    )
}

export default BetNumberBtn;