import { SavedGame } from '../../../types/types';
import NumbersFormatter from '../../../functions/NumbersFormater';
import React from 'react';
import { RecentGameItemContainer, PreBar, RecentGameItemStyle, RecentGameNumbers, GameDataPrice, GameType } from './style';


const RecentGameItem = ({type,price,color,data,numbers,active}:SavedGame) => {
    const props = {type,price,color,data,numbers,active}

    const ItemDate = new Date(data)
    return (
        <RecentGameItemContainer>
            <PreBar color={color}>

            </PreBar>
            <RecentGameItemStyle color={color}>

                <RecentGameNumbers>

                    {numbers.map((element:number,index:number) => NumbersFormatter(numbers.length,element,index))}

                </RecentGameNumbers>
                <GameDataPrice>
                    {ItemDate.toLocaleDateString("en-US")} - (R$ {String(price.toFixed(2)).replace(".",",")})
                </GameDataPrice>
                <GameType {...props}>
                    {type}
                </GameType>
            </RecentGameItemStyle>
        </RecentGameItemContainer>
    )
}

export default RecentGameItem;