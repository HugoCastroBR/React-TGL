import React from 'react';
import styled  from 'styled-components';
import SimpleButton from '../components/ArrowButton';
import GameSelect from '../components/GameSelect';
import Page from '../components/Page';
import Fonts from '../styles/fonts';


const RecentGamesTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    & div:first-child{
        ${Fonts}
        width: 60%;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        & h2{
            text-align: center;
            font: italic normal bold 24px "Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #707070;
            text-transform: uppercase;
            margin: 0px;
        }

        & span{
            text-align: left;
            font: italic normal normal 17px"Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #868686;
            margin-left: 30px;
        }
    }

    & div{
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    & div:last-child{
        height: 100%;
        align-items: center;
    }

    

`



const HomeContainer = styled.section`
    width: 100vw;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`


const Home = () => {
    return(
        <Page> 
            <HomeContainer>

                <RecentGamesTitle>
                    <div>
                        <h2>Recent Games</h2>
                        <span>Filters</span>
                        <GameSelect/>
                    </div>

                    <div>
                        <SimpleButton Arrow={true} Color={'#B5C401'} FontSize={24} >
                        <span>
                            New Bet
                        </span>
                        </SimpleButton>
                    </div>
                </RecentGamesTitle>

                <div>

                </div>

            </HomeContainer>
        </Page>
    )
}

export default Home;