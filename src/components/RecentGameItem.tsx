import styled from 'styled-components';
import { GameSelectButtonType, SavedGame } from '../types/types';
import NumbersFormatter from './../containers/NumbersFormater';


const RecentGameItemStyle = styled.div<GameSelectButtonType>`
    margin-top: 15px;
    margin-bottom: 15px;
    width: 550px;
    height: 94px;
    display: flex;
    flex-direction: column;
    margin-left: 28px;
    justify-content: space-around;

    ::before{
        margin-left: -20px;
        position: absolute;
        content: "";
        display: block;
        width: 6px;
        height: 94px;
        background-color: ${props =>`${props.color && props.color}`};
        border-radius: 100px;
    }
`

const RecentGameNumbers = styled.span`
    text-align: left;
    font: italic normal bold 20px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #868686;
`

const GameDataPrice = styled.span`
    text-align: left;
    font: normal normal normal 17px "Helvetica Neue Roman";
    letter-spacing: 0px;
    color: #868686;

`
const GameType = styled.span<SavedGame>`
    color: ${props =>`${props.color && props.color}`};
    font: italic normal bold 20px "Helvetica Neue Bold";
    letter-spacing: 0px;
`

const RecentGameItem = ({type,price,color,data,numbers}:SavedGame) => {
    const props = {type,price,color,data,numbers}
    return (
        <RecentGameItemStyle color={color}>
            <RecentGameNumbers>

                {numbers.map((element,index) => NumbersFormatter(numbers.length,element,index))}

            </RecentGameNumbers>
            <GameDataPrice>
                {data} - (R$ {String(price.toFixed(2)).replace(".",",")})
            </GameDataPrice>
            <GameType {...props}>
                {type}
            </GameType>
        </RecentGameItemStyle>
    )
}

export default RecentGameItem;