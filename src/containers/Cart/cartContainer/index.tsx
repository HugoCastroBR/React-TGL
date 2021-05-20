import React, { Fragment, useEffect, useState } from 'react';
import { SavedGame } from '../../../types/types';
import SimpleButton from '../../../components/buttons/arrowButton';
import CartItem from '../cartItem';
import MenuIcon from '../../../components/icons/menuIcon';
import useTGL from '../../../hooks/useStore';
import { SetCartErrorMsg,ResetCart } from '../../../store/actions';
import { addToUserBets } from '../../../store/FetchActions/FetchBets';
import { CartContainerStyle, CartItemsContainer, CartClosed, EmptyCartAlert, CartTotalText, SaveErrorMsg, SaveButton, CartClosedContainer } from './style';





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
        const sumReducer = (A:number,C:number) => {return Number(A) + Number(C)}
        const result = NumberArr.reduce(sumReducer)
        return String(Number(result).toFixed(2)).replace(".",",")
    }




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
                            dispatch(SetCartErrorMsg("Compra Salva","green"))
                            const elementsToPost = [...states.Game.Cart].map(element => {
                                const GameId = states.Game.GamesData.find(e => e.type === element.type)

                                if(typeof(GameId?.id) !== 'number'){
                                    return {numbers:element.numbers, game_id: 0}
                                }else{
                                    return {numbers:element.numbers, game_id: GameId.id}
                                }
                                
                            })
                            
                            addToUserBets(elementsToPost)

                        }
                    }else{
                        dispatch(SetCartErrorMsg("Carrinho vazio","red"))
                    }
                    
                    
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


