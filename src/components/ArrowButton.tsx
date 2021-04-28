import React from 'react';
import styled from "styled-components"
import Fonts from '../styles/fonts';
import ArrowRight from './icons/arrowRight';
import ArrowLeft from './icons/arrowLeft';
import { Link } from 'react-router-dom';




const ButtonStyle = styled.button<{FontSize:number, LinkColor: string}>`
    ${Fonts}
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font: italic normal bold ${props => `${props.FontSize}`}px/70px "Helvetica Neue Bold";
    cursor: pointer;
    
    & a,span{
        text-decoration:none;
        color: ${props => `${props.LinkColor}`};
        
        & p{
            margin: 0px;
            margin-right: 50px;
        }
    }
`

type SimpleButtonProps = {
    children?: React.ReactNode,
    Arrow?: boolean
    ArrowSize?: number[] // X , Y
    Color?: string
    FontSize?: number
    ReverseArrow?: boolean
    
}

const SimpleButton = ({children = "",Arrow = false,
ArrowSize =[45,28] ,Color = "#707070", FontSize = 20,
ReverseArrow=false}
:SimpleButtonProps) => {
    return(
        ReverseArrow ? 
        <ButtonStyle FontSize={FontSize} LinkColor={Color}>
            {Arrow && <ArrowLeft width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
            {children}
        </ButtonStyle>
        :
        <ButtonStyle FontSize={FontSize} LinkColor={Color}>
            {children}
            {Arrow && <ArrowRight width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
        </ButtonStyle>
    )
}

export default SimpleButton;
