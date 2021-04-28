import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Fonts from '../styles/fonts';
import SimpleButton from './ArrowButton';
import CartItem from './CartItem';



const CartContainerStyle = styled.div`

    width: 300px;
    height: auto;
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`
const SaveButton = styled.button`
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


const CartContainer = () => {
    return(
        <CartContainerStyle>
            <CartItemsContainer>
                <h2>
                    Cart
                </h2>
                <EmptyCartAlert>
                    Empty Cart
                </EmptyCartAlert>
                <CartItem/>
            </CartItemsContainer>
            <SaveButton>
                <SimpleButton Arrow={true} Color={"#27C383"} FontSize={35} >
                    <span color="#27C383">
                        Save
                    </span>
                </SimpleButton>
            </SaveButton>
        </CartContainerStyle>
    )
}

export default CartContainer;   