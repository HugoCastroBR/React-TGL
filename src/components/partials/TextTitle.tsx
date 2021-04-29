import React from 'react';
import styled  from 'styled-components';
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
        font: italic normal bold 65px/70px "Helvetica Neue Bold";
        color: #707070;
    }
    & :nth-child(2){
        background-color: #B5C401;
        height: 40px;
        width: 145px;
        font: italic normal bold 22px/85px "Helvetica Neue Bold";
        color: #FFFFFF;
        border-radius: 100px;
    }

    & :last-child{
        margin-top: 30px;
        text-align: center;
        font: italic normal bold 83px/85px "Helvetica Neue Bold";
        color: #707070;
        text-transform: uppercase;
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