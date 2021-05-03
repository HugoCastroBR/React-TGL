import React, { useEffect } from 'react';
import styled from 'styled-components';
import SimpleButton from '../components/buttons/ArrowButton';
import FilterSelect from '../components/partials/FilterSelect';
import Page from '../components/partials/Page';
import RecentGameItem from '../components/home/RecentGameItem';
import Fonts from '../styles/fonts';
import { SavedGame } from '../types/types';
import { Link } from 'react-router-dom';
import useTGL from '../hooks/useStore';
import { SetRecentGames } from '../store/actions';


const RecentGamesTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    @media screen and (max-width: 1200px){
        justify-content: center;
    }
    @media screen and (max-width: 800px){
        margin-top: 30px;
        flex-direction: column;
    }
    & div:first-child{

        ${Fonts}
        width: 60%;
        justify-content: flex-start;
        align-items: center;

        @media screen and (max-width: 1200px){
            width: 80%;
            justify-content: center;
        }
        @media screen and (max-width: 800px){
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        & h2{
            text-align: center;
            font: italic normal bold 24px "Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #707070;
            text-transform: uppercase;
            margin: 0px;
            @media screen and (max-width: 1200px){
                font-size: 20px;
            }
            @media screen and (max-width: 800px){
                font-size: 32px;
            }
            
        }

        & span{

            text-align: left;
            font: italic normal normal 16px"Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #868686;
            margin-left: 20px;
            margin-right: 32px;
            @media screen and (max-width: 800px){
                margin-top: 20px;
                margin-bottom: 10px;
                margin-left: 0px;
            }
        }
    }
    
    & div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;    
        justify-content: flex-start;
        @media screen and (max-width: 800px){
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 2px;
        }

    }
    & aside{
        height: 100%;
        align-items: center;
        margin-top: -74px;
        & a {
            text-decoration: none;
        }
        @media screen and (max-width: 800px){
            margin-top: 20px;
        }
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
    @media screen and (max-width: 800px){
        margin-top: 70px;

    }
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
`

const RecentGames: SavedGame[] = [  // List of Recent Games (get from redux)
    {
        color: "#7F3992",
        price: 2.50,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        type: "Lotofácil",
        data: "30/11/2020"
    },
    {
        color: "#01AC66",
        price: 3.10,
        numbers: [1, 2, 3, 4, 5, 6, 2, 8, 9, 10,11,12,1, 2, 3, 4, 5, 6, 2, 8, 9, 10,11,12],
        type: "Megasena",
        data: "20/12/2021"
    }
]

const Home = () => {
    // return Page Template without home btn

    const { states, dispatch } = useTGL()
    useEffect(() => {
        dispatch(SetRecentGames(states.Auth.User.RecentGames))
    },[])

    return (
        <Page WithHomeBtn={false}>
            <HomeContainer>

                <RecentGamesTitle>
                    <div>
                        <h2>Recent Games</h2>
                        <span>Filters</span>
                        <FilterSelect />
                    </div>

                    <aside>
                        <Link to="/new-bet">
                            <SimpleButton Arrow={true} Color={'#B5C401'} FontSize={24} >
                                <span>
                                    New Bet
                                </span>
                            </SimpleButton>
                        </Link>
                    </aside>
                </RecentGamesTitle>

                <RecentGamesContainer>
                    {/* For Recent Games make a Recent Game Item in page */}
                    {states.Cart.RecentGames.length > 0 && states.Cart.RecentGames.map((element, index) => <RecentGameItem {...element} key={index}></RecentGameItem>)}
                </RecentGamesContainer>

            </HomeContainer>
        </Page>
    )
}

export default Home;