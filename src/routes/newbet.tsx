import React from 'react';
import styled from 'styled-components';
import CartContainer from '../components/Cart/CartContainer';
import NewBetContainer from '../components/newBet/NewBetContainer';
import Page from '../components/partials/Page';



const NewBetPageContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`

const NewBet = () => {
    return(
        <Page>
            <NewBetPageContainer>
                <NewBetContainer/>
                    {/* 844px */}
                <CartContainer/>
            </NewBetPageContainer>
        </Page>
    )
}

export default NewBet;