import styled from 'styled-components';
import { GameSelectButtonType } from '../../../types/types';


export const GameSelectButton = styled.button<GameSelectButtonType>`
    font: italic normal bold 14px "Helvetica Neue Bold" ;
    color: ${(props) => {
        if (props.active) {
            return `white`
        } else {
            return `${props.color ? props.color : 'gray'}`
        }
    }};
    width: 115px;
    height: 35px;
    border: 2px solid ${(props) => `${props.color ? props.color : 'gray'}`};
    border-radius: 100px;
    background-color: ${(props) => `${props.active ? props.color : 'transparent'}`};
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
`

export const GameSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 35px;
    @media screen and (max-width: 800px){
                width: 100vw;
                margin: 0px;
                & button{
                    width: 100px;
                    font-size: 12px;
                }
            }
`