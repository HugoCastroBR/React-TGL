import React from 'react';
import styled from "styled-components"
import Fonts from '../../styles/fonts';
import ArrowRight from '../icons/arrowRight';
import ArrowLeft from '../icons/arrowLeft';





const ButtonStyle = styled.button<{FontSize:number, LinkColor: string,AuthTemplate: boolean}>`
    ${Fonts}

    color: #707070;
    display: flex;
    width: ${props => `${props.AuthTemplate && '350px'}`};
    height: 130px;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font: italic normal bold ${props => `${props.FontSize}`}px/70px "Helvetica Neue Bold";
    cursor: pointer;    
    @media screen and (max-width: 400px){
        font-size: 16px;
    }
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
    AuthTemplate?: boolean
}

const SimpleButton = ({children = "",Arrow = false,
ArrowSize =[45,28] ,Color = "#707070", FontSize = 20,
ReverseArrow=false,  AuthTemplate = false}
:SimpleButtonProps) => {
    return(
        ReverseArrow ? 
        <ButtonStyle FontSize={FontSize} LinkColor={Color} AuthTemplate={AuthTemplate}>
            {Arrow && <ArrowLeft width={ArrowSize[0]} height={ArrowSize[1]} color={Color} />}
            {children}
        </ButtonStyle>
        :
        <ButtonStyle FontSize={FontSize} LinkColor={Color} AuthTemplate={AuthTemplate}>
            {children}
            {Arrow && <ArrowRight width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
        </ButtonStyle>
    )
}

export default SimpleButton;


