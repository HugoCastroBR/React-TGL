import React from 'react';
import styled from 'styled-components';
import CartContainer from '../components/CartContainer';
import Page from '../components/Page';
import Fonts from '../styles/fonts';


const NewBetPageContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: auto;
    display: flex;
    margin-top: 70px;
`

const NewBet = () => {
    return(
        <Page>
            <NewBetPageContainer>
                <div>
                    
                </div>
                <CartContainer/>
            </NewBetPageContainer>
        </Page>
    )
}

export default NewBet;