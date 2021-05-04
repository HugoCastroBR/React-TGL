import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SavedGame } from '../../types/types';
import SimpleButton from '../../components/buttons/ArrowButton';
import CartItem from './CartItem';
import MenuIcon from '../../components/icons/menuIcon';
import useTGL from '../../hooks/useStore';
import { AddToUserRecentGames, SetCartErrorMsg, SyncGameRecentGames, SyncUserRecentGames, SetRecentGames, ResetCart } from '../../store/actions';



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
    max-height: 50vh;
    overflow-y: auto;
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
    margin-bottom: 8px;
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

const CartClosedContainer = styled.div`
    
    width: 100%;
`
const CartClosed = styled.button`

    border: none;
    background-color: transparent;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: italic normal bold 16px "Helvetica Neue Bold" ;
    color: #707070;
    margin-top: -26px;
    & h2{ 
        
        margin: 0px;
        text-align: left;
        text-transform: uppercase;
    }
    cursor: pointer;
`




const SaveErrorMsg = styled.span<{color:string}>`
    font: italic normal bold 16px "Helvetica Neue Light" ;
    width: 100%;
    height: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: ${props => `${props.color}`};
`

const CartContainer = () => {

    const {states,dispatch} = useTGL()


    useEffect(() => {
        window.innerWidth < 1200 ? setCartVisibility(false) : setCartVisibility(true)
        dispatch(ResetCart())
        // To do Clear Cart
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [cartVisible, setCartVisibility] = useState(false)
    const genTotal = (N:SavedGame[]) => {
        const NumberArr:number[] = N.map((E:SavedGame) => E.price)
        const sumReducer = (A:number,C:number) => A + C
        return String(NumberArr.reduce(sumReducer).toFixed(2)).replace(".",",")
    }

    const InitialSync = useCallback(() => {
        dispatch(SyncUserRecentGames())
        dispatch(SyncGameRecentGames(states.Auth.User.RecentGames))
        dispatch(SetRecentGames(states.Auth.User.RecentGames))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[states.Auth.User])


    return(
        <CartContainerStyle>
            
            {cartVisible ?
                <Fragment>
                    <CartItemsContainer>
                    {window.innerWidth < 1200 ?
                        <CartClosed onClick={() => {
                            setCartVisibility(!cartVisible)
                        }}>
                            <h2>
                                Cart
                            </h2>
                            <MenuIcon/>
                        </CartClosed>
                        :
                        <h2>
                            Cart
                        </h2>
                    }
                    
                    {states.Game.Cart.length?
                    states.Game.Cart.map((element,index) => <CartItem key={index} index={index} {...element}/>):
                    <EmptyCartAlert>
                    Empty Cart
                    </EmptyCartAlert>
                    }
                    
                    
                </CartItemsContainer>
                <CartTotalText>
                    <span>
                        Cart
                    </span>
                    <span>
                        {states.Game.Cart.length > 0 ? 
                        `Total: R$ ${genTotal(states.Game.Cart)}`
                        : `Total: R$ 0,00`
                        }
                        
                    </span>
                </CartTotalText>
                <SaveErrorMsg color={states.Game.CartErrorMsg.color}>
                    {states.Game.CartErrorMsg.msg}
                </SaveErrorMsg>
                <SaveButton
                onClick={() => {
                    if(states.Game.Cart.length > 0){
                        if(Number(genTotal(states.Game.Cart).replaceAll(",",".")) < 30){
                            
                            dispatch(SetCartErrorMsg("O valor minimo é de R$ 30.00","red"))
                        }else{
                            dispatch(ResetCart())
                            dispatch(AddToUserRecentGames(states.Game.Cart))
                            dispatch(SetCartErrorMsg("Compra Salva","green"))
                        }
                    }else{
                        dispatch(SetCartErrorMsg("Carrinho vazio","red"))
                    }
                    InitialSync()
                }}
                >
                    <SimpleButton Arrow={true} Color={"#27C383"} FontSize={35} >
                        <span color="#27C383">
                            Save
                        </span>
                    </SimpleButton>
                </SaveButton>
                </Fragment>
            : 
            <CartClosedContainer>
                <CartItemsContainer>
                    <CartClosed
                    onClick={() => {
                        setCartVisibility(!cartVisible)
                    }}>
                    <h2>
                        Cart
                    </h2>
                    <MenuIcon/>
                    </CartClosed>
                </CartItemsContainer>
                

            </CartClosedContainer>
            }

            

        </CartContainerStyle>

    )
}

export default CartContainer;   


