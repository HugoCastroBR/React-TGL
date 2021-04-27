import React from 'react';
import styled from "styled-components"
import Fonts from '../styles/fonts';
import ArrowRight from './icons/arrowRight';




const ButtonStyle = styled.button<{FontSize:number}>`
    ${Fonts}
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font: italic normal bold ${props => `${props.FontSize}`}px/70px "Helvetica Neue Bold";
    cursor: pointer;
`

type SimpleButtonProps = {
    children?: React.ReactNode,
    Arrow?: boolean
    ArrowSize?: number[] // X , Y
    Color?: string
    FontSize?: number
}

const SimpleButton = ({children = "",Arrow = false,
                        ArrowSize =[45,28] ,Color = "#707070", FontSize = 20 }:SimpleButtonProps) => {
    return(
        <ButtonStyle FontSize={FontSize}>
            {children}
            {Arrow && <ArrowRight width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
        </ButtonStyle>
    )
}

export default SimpleButton;
