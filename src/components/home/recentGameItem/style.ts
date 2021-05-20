import styled from 'styled-components';
import { GameSelectButtonType, SavedGame } from '../../../types/types';

export const RecentGameItemStyle = styled.div<GameSelectButtonType>`

    
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    justify-content: space-around;
    

    /* ::before{
        margin-left: -20px;
        position: absolute;
        content: "";
        display: block;
        width: 6px;
        height: 100px;
        background-color: ${props =>`${props.color && props.color}`};
        border-radius: 100px;
    } */

    
`

export const RecentGameItemContainer = styled.div`
    margin-top: 30px;
    width: calc(100% - 36px);
    display: flex;
    margin-left: 28px;
`

export const PreBar = styled.div<GameSelectButtonType>`
    margin-left: -20px;
    display: block;
    width: 6px;
    height: auto;
    background-color: ${props =>`${props.color && props.color}`};
    border-radius: 100px;
`

export const RecentGameNumbers = styled.span`
    text-align: left;
    font: italic normal bold 20px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #868686;
`

export const GameDataPrice = styled.span`
    text-align: left;
    font: normal normal normal 17px "Helvetica Neue Roman";
    letter-spacing: 0px;
    color: #868686;

`
export const GameType = styled.span<SavedGame>`
    color: ${props =>`${props.color && props.color}`};
    font: italic normal bold 20px "Helvetica Neue Bold";
    letter-spacing: 0px;
`