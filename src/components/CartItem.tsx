import React from 'react';
import styled  from 'styled-components';
import NumbersFormatter from '../containers/NumbersFormater';
import { SavedGame } from '../types/types';
import DeleteIcon from './icons/deleteIcon';


type CartItemProps = {
    color: string
}

const CartItemStyle = styled.div`
    display: flex;
    width: 284px;
    min-height: 60px;
    margin-top: 16px;
    margin-bottom: 16px;
`

const DeleteContainer = styled.div`
    width: 34px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & button{
        cursor: pointer;
        background-color: transparent;
        border: 0px;

    }
`



const ItemInfosContainer = styled.div<CartItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 280px;
    border-left: 4px solid ${props => `${props.color}`};
    border-radius: 4px 0px 0px 4px;
    padding-left: 12px;
`

const ItemInfosNumbers = styled.span`
    text-align: left;
    font: italic normal bold 15px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #868686;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;
    width: 228px;
    margin-bottom: 6px;
`

const GameTypePriceContainer = styled.div`
    width: 228px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
`


const GameTypeText = styled.span<CartItemProps>`
    display: flex;
    min-width: 80px;
    padding-right: 8px;
    text-align: center;
    font: italic normal bold 16px "Helvetica Neue Bold";
    color: ${props => `${props.color}`};

`

const GamePriceText = styled.span`
    text-align: left;
    font: normal normal normal 16px"Helvetica Neue Bold";
    color: #868686;

`




const CartItem = ({
        color = "",
        data = '',
        numbers = [],
        price = 0,
        type = ""
    } :SavedGame) => {
    return (
        <CartItemStyle>
            <DeleteContainer>
                <button>
                    <DeleteIcon/>
                </button>
            </DeleteContainer>
            <ItemInfosContainer color={color}>
                <ItemInfosNumbers>
                    {numbers.map((element,index) => NumbersFormatter(numbers.length,element,index))}
                </ItemInfosNumbers>
                <GameTypePriceContainer>
                    <GameTypeText color={color}>
                        {type}
                    </GameTypeText>
                    <GamePriceText>
                        R$ {String(price.toFixed(2)).replace(".",",")}
                    </GamePriceText>
                </GameTypePriceContainer>
            </ItemInfosContainer>
        </CartItemStyle>
    )
}

export default CartItem;