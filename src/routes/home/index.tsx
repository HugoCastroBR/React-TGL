/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SimpleButton from '../../components/buttons/arrowButton';
import FilterSelect from '../../containers/partials/filterSelect';
import Page from '../../components/partials/page/Page';
import RecentGameItem from '../../components/home/recentGameItem';
import { Link } from 'react-router-dom';
import useTGL from '../../hooks/useStore';
import { getUserBets } from '../../store/FetchActions/FetchBets';
import { EmptyRecentGames, HomeContainer } from './style';
import { RecentGamesTitle } from './style';
import { RecentGamesContainer } from './style';





const Home = () => {
    // return Page Template without home btn

    const { states, dispatch } = useTGL()

    useEffect(() => {
        dispatch(getUserBets())
        document.title = "TGL | Recent Bets"
    }, [])

    

    
    const GenItems = () => {
        let toReturn;

        if(!states.Game.RecentGames.find(e => e.active === true)){
            toReturn = states.Game.RecentGames.map((element,index) => <RecentGameItem {...element} key={index}></RecentGameItem>)
        }else{
            toReturn = states.Game.RecentGames
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
                    {states.Game.RecentGames.length > 0 ? GenItems() : <EmptyRecentGames>No Recent games</EmptyRecentGames>}
                </RecentGamesContainer>

            </HomeContainer>
        </Page>
    )
}

export default Home;