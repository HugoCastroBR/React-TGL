import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import CartContainer from '../components/Cart/CartContainer';
import NewBetContainer from '../components/newBet/NewBetContainer';
import Page from '../components/partials/Page';
import useTGL from '../hooks/useStore';
import { ResetFilters, SetGamesData } from '../store/actions';
import { GameData } from '../types/types';



const NewBetPageContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;

    @media screen and (max-width: 1200px){
        align-items: center;
        flex-direction: column-reverse;
    }
`



const NewBet = () => {
    const { states, dispatch } = useTGL()


    const getGamesData = async () => {
        const res = await fetch("https://tglproject10-default-rtdb.firebaseio.com/types.json",{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const solved:GameData[] = await res.json()
        console.log("fetching")
        const NewData = solved.map((element) => {return {...element,active:false}})
        NewData[0].active = true
        dispatch(SetGamesData(NewData))
    }


    useEffect(() => {
        dispatch(ResetFilters())
        getGamesData()
    }, [])



    return(
        <Page>
            <NewBetPageContainer>
                {states.Game.GamesData.map((element,index) => {
                    if(element.active){
                        return <NewBetContainer {...element} key={index}/> 
                    }
                })}
                {/* <NewBetContainer/> */}
                    {/* 844px */}
                <CartContainer/>
            </NewBetPageContainer>
        </Page>
    )
}

export default NewBet;