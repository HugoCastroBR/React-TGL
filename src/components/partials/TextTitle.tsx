import React from 'react';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';


const TextContainer = styled.span`
    ${Fonts}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    & h1{
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & :first-child{
        width: 200px;
        margin-bottom: 30px;
        text-align: center;
        font: italic normal bold 65px "Helvetica Neue Bold";
        color: #707070;
        line-height: 70px;

        @media screen and (max-width: 800px){
            margin-bottom: 20px;
            font-size: 8vw;
            line-height: 8.5vw;
            
        } 
        @media screen and (max-width: 500px){
            font-size: 35px;
            line-height: 35px;
            
        }

    }
    & :nth-child(2){
        background-color: #B5C401;
        height: 40px;
        max-width: 145px;
        font: italic normal bold 22px/85px "Helvetica Neue Bold";
        color: #FFFFFF;
        border-radius: 100px;
        width: 20vw;

        @media screen and (max-width: 500px){
            max-width: auto;
            width: 100px;
            margin-bottom: -10px;
            font-size: 20px;
            line-height: 30px;
        }
    }

    & :last-child{
        margin-top: 30px;
        text-align: center;
        font: italic normal bold 83px/85px "Helvetica Neue Bold";
        color: #707070;
        text-transform: uppercase;
        @media screen and (max-width: 800px){
            margin-bottom: 20px;
            font-size: 7vw;
            line-height: 7.5vw;
            
        } 

        @media screen and (max-width: 500px){
            margin-bottom: 0px;
            font-size: 30px;
            line-height: 30px;
            
        }
    }
`

const TextTitle = () => {
    return (
        <TextContainer>
            <h1>The Greatest App</h1>
            <h1>for</h1>
            <h1>Lottery</h1>
        </TextContainer>
    )
}

export default TextTitle;