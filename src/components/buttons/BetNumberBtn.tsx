import styled from 'styled-components';
import React from 'react';
import { NumberBtnProps } from '../../types/types';






const BetNumberBtnStyle = styled.button<{selected:boolean}>`
    width: 64px;
    height: 64px;
    border: 0px;
    background-color: ${props => `${props.selected?'#27C383':'#ADC0C4'}`};
    border-radius: 100px;
    color: white;
    font: normal normal bold 20px "Helvetica Neue Bold";
    cursor: pointer;
    margin-right: 12px;
    margin-bottom: 12px;
    transition: 0.2s;

    :hover{
        transition: 0.2s;
        background-color: ${props => `${props.selected?'#17a56a':'#8da3a7'}`};
    }
    :active{
        transition: 0.2s;
        background-color: ${props => `${props.selected?'#17a56a':'#8da3a7'}`};
    }
`


type BetNumberBtnProps = NumberBtnProps & {
    OnClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BetNumberBtn = ({number,selected=false,OnClick}:BetNumberBtnProps) => {
    return(
        <BetNumberBtnStyle selected={selected} onClick={(event) => OnClick(event)}>
            {number <= 9? `0${number}`: number }
        </BetNumberBtnStyle>
    )
}

export default BetNumberBtn;