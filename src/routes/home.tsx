/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import SimpleButton from '../components/buttons/ArrowButton';
import FilterSelect from '../containers/partials/FilterSelect';
import Page from '../components/partials/Page';
import RecentGameItem from '../components/home/RecentGameItem';
import { CurrentFiltersProps } from '../types/types';
import { Link } from 'react-router-dom';
import useTGL from '../hooks/useStore';
import { SetRecentGames, SyncGameRecentGames, SyncUserRecentGames } from '../store/actions';
import api from '../services/api';
import { getUserBets } from './../store/FetchActions/FetchBets';


const RecentGamesTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 1200px){
        margin-top: 30px;
        flex-direction: column;
    }
    & div:first-child{

        
        width: 60%;
        justify-content: flex-start;
        align-items: center;


        @media screen and (max-width: 1200px){
            margin-top: -32px;
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
                font-size: 32px;
            }
            @media screen and (max-width: 800px){
                font-size: 24px;
                margin-top: 0px;
            }
            
        }

        & span{

            text-align: left;
            font: italic normal normal 16px"Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #868686;
            margin-left: 20px;
            margin-right: 32px;
            @media screen and (max-width: 1200px){
                margin-bottom: 10px;
                margin-left: 32px;
            }
        }
        & div{
            height: auto;
            @media screen and(max-width: 1200px){
                margin-bottom: -40px;
            }
            & button{
                margin-top: 12px;
            }
        }
    }
    
    & div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;    
        justify-content: flex-start;
        @media screen and (max-width: 1200px){
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 2px;
        }

    }
    & aside{
        height: 40px;
        align-items: center;
        margin-top: -74px;
        
        & a {
            text-decoration: none;
        }
        @media screen and (max-width: 1200px){
            margin-left: 14px;
            margin-top: 32px;
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
    @media screen and (max-width: 1200px){
        margin-top: 70px;

    }
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    margin-bottom: 36px;
`

const EmptyRecentGames = styled.span`
    margin-top: 12px;
    font: italic normal normal 22px"Helvetica Neue Medium";
    letter-spacing: 0px;
    color: #868686;

    @media screen and (max-width: 1200px){
        margin-top: 70px;
        width: 100%;
        margin-left: -22px;
        text-align: center;
    }
`






const Home = () => {
    // return Page Template without home btn

    const { states, dispatch } = useTGL()

    const InitialSync = useCallback(() => {

        dispatch(SyncUserRecentGames())
        dispatch(SyncGameRecentGames(states.Auth.User.RecentGames))
        // dispatch(SetRecentGames(states.Auth.User.RecentGames))

        dispatch(getUserBets())

    }, [states.Auth.User])


    useEffect(() => {
        InitialSync()
    }, [])

    // const Organize = (ToOrganize: CurrentFiltersProps[]) => {
    //     let GamesToShow = [...ToOrganize]
    //     let TypesExist: any = []

    //     GamesToShow.forEach(element => {
    //         if (TypesExist.includes(element.type)) {

    //         } else {
    //             TypesExist.push(element.type)
    //         }
    //     })
    //     const fullLength = GamesToShow.length
    //     let ExitList: CurrentFiltersProps[] = []

    //     if (TypesExist.length > 0) {
    //         while (ExitList.length < fullLength) {
    //             GamesToShow.forEach((element, index) => {
    //                 if (index === (GamesToShow.length - 1)) {
    //                     if (element.type === TypesExist[0]) {
    //                         ExitList.push(element)
    //                         GamesToShow.slice(index, 1)
    //                     }
    //                     TypesExist.shift(index)
    //                 } else {
    //                     if (element.type === TypesExist[0]) {
    //                         ExitList.push(element)
    //                         GamesToShow.slice(index, 1)
    //                     }
    //                 }
    //             })
    //         }
    //     }
    //     return ExitList

    // }


    // const GetRecentToShow = () => {
    //     console.log(states.Game.RecentGames)
    //     if (states.Game.RecentGames.length > 0) {
    //         let isAllFalse = true
    //         // eslint-disable-next-line array-callback-return
    //         let toShow = Organize(states.Game.CurrentFilters).map((element, index) => {
    //             if (element.active) {
    //                 isAllFalse = false
    //                 return <RecentGameItem {...element} key={index}></RecentGameItem>
    //             }
    //         })
    //         if (isAllFalse) {
    //             console.log(states.Game.CurrentFilters)
    //             return Organize(states.Game.CurrentFilters).map((element, index) => {
    //                 return <RecentGameItem {...element} key={index}></RecentGameItem>
    //             })
    //         } else {
    //             return toShow
    //         }
    //     } else {
    //         //  show empty recent games 
    //         return <EmptyRecentGames>No Recent games</EmptyRecentGames>
    //     }
    // }

    console.log(states.Game.RecentGames)

    
    const GenItems = () => {
        let toReturn;
        console.log(states.Game.CurrentFilters.length )
        if(!states.Game.CurrentFilters.find(e => e.active === true)){
            toReturn = states.Game.RecentGames.map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
        }else{
            toReturn = states.Game.CurrentFilters
                .filter(element => element.active)
                .map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
        }
        return toReturn
    }

    return (
        
        <Page WithHomeBtn={false}>
            <HomeContainer>

                <RecentGamesTitle>
                    <div>
                        <h2>Recent Games</h2>
                        <span>{states.Game.RecentGames.length > 0 && "Filters"}</span>
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
                    {GenItems()}
                </RecentGamesContainer>

            </HomeContainer>
        </Page>
    )
}

export default Home;