import React from 'react';
import NumbersFormatter from '../../../functions/NumbersFormater';
import useTGL from '../../../hooks/useStore';
import { DeleteCartItem } from '../../../store/actions';
import { SavedGame } from '../../../types/types';
import DeleteIcon from '../../../components/icons/deleteIcon';
import { CartItemStyle, DeleteContainer, GamePriceText, GameTypePriceContainer, GameTypeText, ItemInfosContainer, ItemInfosNumbers } from './style';




const CartItem = ({
        color = "",
        data = '',
        numbers = [],
        price = 0,
        type = "",
        index = -1
    } :SavedGame & {index:number}) => {

    const {dispatch} = useTGL()




    const DeleteFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(DeleteCartItem(index))
    }
    
    return (
        <CartItemStyle>
            <DeleteContainer>
                <button onClick={DeleteFunction}>
                    <DeleteIcon/>
                </button>
            </DeleteContainer>
            <ItemInfosContainer color={color}>
                <ItemInfosNumbers>
                    {numbers.map((element:any,index:number) => NumbersFormatter(numbers.length,element,index))}
                </ItemInfosNumbers>
                <GameTypePriceContainer>
                    <GameTypeText color={color}>
                        {type}
                    </GameTypeText>
                    <GamePriceText>
                        R$ {String(Number(price).toFixed(2)).replace(".",",")}
                    </GamePriceText>
                </GameTypePriceContainer>
            </ItemInfosContainer>
        </CartItemStyle>
    )
}

export default CartItem;