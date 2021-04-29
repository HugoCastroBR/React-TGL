import React from 'react';
import styled  from 'styled-components';
import SimpleButton from '../components/buttons/SimpleButton';
import GameSelect from '../components/partials/GameSelect';
import Page from '../components/partials/Page';
import RecentGameItem from '../components/Cart/RecentGameItem';
import Fonts from '../styles/fonts';
import { SavedGame } from '../types/types';
import { Link } from 'react-router-dom';


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

        & a {
            text-decoration: none;
        }
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

const RecentGamesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
`

const RecentGames:SavedGame[] = [  // List of Recent Games (get from redux)
    {
        color: "#7F3992",
        price: 2.50,
        numbers: [1,2,3,4,5,6,7,8,9,10],
        type: "Lotofácil",
        data: "30/11/2020"
    },
    {
        color: "#01AC66",
        price: 3.10,
        numbers: [1,2,3,4,5,6,2,8,9,10],
        type: "Megasena",
        data: "20/12/2021"
    }
]

const Home = () => {
    // return Page Template without home btn
    return(
        <Page WithHomeBtn={false}>  
            <HomeContainer>
                
                <RecentGamesTitle>
                    <div>
                        <h2>Recent Games</h2>
                        <span>Filters</span>
                        <GameSelect/>
                    </div>

                    <div>
                        <Link to="/new-bet">
                            <SimpleButton Arrow={true} Color={'#B5C401'} FontSize={24} >
                                <span>
                                    New Bet
                                </span>
                            </SimpleButton>
                        </Link>
                    </div>
                </RecentGamesTitle>

                <RecentGamesContainer>
                    {/* For Recent Games make a Recent Game Item in page */}
                    {RecentGames.map(element => <RecentGameItem {...element}></RecentGameItem>)}
                </RecentGamesContainer>

            </HomeContainer>
        </Page>
    )
}

export default Home;