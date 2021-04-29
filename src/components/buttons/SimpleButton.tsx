import React from 'react';
import styled from "styled-components"
import Fonts from '../../styles/fonts';
import ArrowRight from '../icons/arrowRight';
import ArrowLeft from '../icons/arrowLeft';


const ButtonStyle = styled.div<{FontSize:number, LinkColor: string}>`
    ${Fonts}
    display: flex;
    flex-direction: row;
    
    
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
            <div>
                {Arrow && <ArrowLeft width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
                {children}
            </div>
        </ButtonStyle>
        :
        <ButtonStyle FontSize={FontSize} LinkColor={Color}>
            <div>
                {children}
                {Arrow && <ArrowRight width={ArrowSize[0]} height={ArrowSize[1]} color={Color}/>}
            </div>
        </ButtonStyle>
    )
}

export default SimpleButton;