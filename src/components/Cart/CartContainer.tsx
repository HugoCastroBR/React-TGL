import React from 'react';
import styled from 'styled-components';
import { SavedGame } from '../../types/types';
import SimpleButton from '../buttons/ArrowButton';
import CartItem from './CartItem';



const CartContainerStyle = styled.div`

    width: 316px;
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    overflow: hidden;
`
const SaveButton = styled.div`
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: italic normal bold 35px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #27C383;
    background: #F4F4F4;
    border: 0px;
    border-top: 1px solid #E2E2E2;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        transition: 0.3s;
        background: #e6e9e8;
    }
`

const CartItemsContainer = styled.div`
    padding: 32px 16px 0px 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        margin: 0px;
        width: 100%;
        margin-bottom: 36px;
        font: italic normal bold 24px "Helvetica Neue Bold";
        letter-spacing: 0px;
        color: #707070;
        text-transform: uppercase;
    }
`


const EmptyCartAlert = styled.span`
    font: italic normal bold 28px "Helvetica Neue Bold";
    color: #a3a3a3;
    margin-bottom: 32px;
`

const CartTotalText = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 46px;
    width: auto;
    margin-left: 16px;
    text-transform: uppercase;

    & :first-child{
        font: italic normal bold 24px "Helvetica Neue Bold" ;
        color: #707070;
    }

    & :last-child{
        margin-top: 1px;
        margin-left: 12px;
        font: normal normal normal 26px "Helvetica Neue Light" ;
        
        color: #707070;
    }
`

const CartClosed = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font: italic normal bold 24px "Helvetica Neue Bold" ;
    color: #707070;
    & h2{ margin: 0px}
`



const CurrentGames:SavedGame[] = [
    {
        color: "blue",
        data: '12/12/21',
        numbers: [1,2,3,4,5,6],
        price: 20,
        type: "LotoFacil"
    },
    {
        color: "#27C383",
        data: '13/1/19',
        numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        price: 2.50,
        type: "Mega-sena"
    }
]


const CartContainer = () => {

    const genTotal = (N:SavedGame[]) => {
        const NumberArr:number[] = N.map((E:SavedGame) => E.price)
        const sumReducer = (A:number,C:number) => A + C
        return String(NumberArr.reduce(sumReducer).toFixed(2)).replace(".",",")
    }

    return(
        // <CartContainerStyle>
        //     <CartItemsContainer>
        //         <h2>
        //             Cart
        //         </h2>
        //         {CurrentGames?
        //         CurrentGames.map((element,index) => <CartItem key={index} {...element}/>):
        //         <EmptyCartAlert>
        //         Empty Cart
        //         </EmptyCartAlert>
        //         }
                
                
        //     </CartItemsContainer>
        //     <CartTotalText>
        //         <span>
        //             Cart
        //         </span>
        //         <span>
        //             Total: R$ {genTotal(CurrentGames)}
        //         </span>
        //     </CartTotalText>
        //     <SaveButton
        //     >
        //         <SimpleButton Arrow={true} Color={"#27C383"} FontSize={35} >
        //             <span color="#27C383">
        //                 Save
        //             </span>
        //         </SimpleButton>
        //     </SaveButton>
        // </CartContainerStyle>

        <CartContainerStyle>
        <CartClosed>
            <h2>
                Cart
            </h2>
            <h2>
                Open
            </h2>
        </CartClosed>
        </CartContainerStyle>
    )
}

export default CartContainer;   