
import React from 'react';
import { NumberBtnProps } from '../../../types/types';
import { BetNumberBtnStyle } from './style';









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