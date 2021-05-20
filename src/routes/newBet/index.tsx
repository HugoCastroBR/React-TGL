import React, { useEffect } from 'react';
import CartContainer from '../../containers/Cart/cartContainer';
import NewBetContainer from '../../containers/newBet/newBetContainer';
import Page from '../../components/partials/page/Page';
import useTGL from '../../hooks/useStore';
import { ResetFilters } from '../../store/actions';
import { getGames } from '../../store/FetchActions/FetchGames';
import { NewBetPageContainer } from './style';






const NewBet = () => {
    const { states, dispatch } = useTGL()



    useEffect(() => {
        dispatch(ResetFilters())
        dispatch(getGames())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return(
        <Page>
            <NewBetPageContainer>
                {/*  eslint-disable-next-line array-callback-return */}
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