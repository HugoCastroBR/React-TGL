/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import Home from './home';
import Register from './register';
import Login from './login';
import ResetPassword from './ResetPassword';
import NewBet from './newbet';
import useTGL from './../hooks/useStore';
import { SetRecentGames, SyncGameRecentGames, SyncUserRecentGames } from '../store/actions';
import Account from './account';


// To do private route to access the new bet page !

const Routes = () => {

    const { states,dispatch } = useTGL()
    const InitialSync = useCallback(() => {
        dispatch(SyncUserRecentGames())
        dispatch(SyncGameRecentGames(states.Auth.User.RecentGames))
        dispatch(SetRecentGames(states.Auth.User.RecentGames))
    },[states.Auth.User])
    useMemo(() => {
        InitialSync()
    },[])

    return (
        <BrowserRouter>
            <Switch>
                {/* {states.Auth.isAuth ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/" to="/login" />
                }
                {states.Auth.isAuth ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/new-bet" to="/login" />
                }
                {states.Auth.RegisterSuccess &&
                    <Redirect exact from="/register" to="/login" /> 
                }
                {states.Auth.RegisterSuccess &&
                    <Redirect exact from="/reset-password" to="/login" /> 
                } */}
                <Route exact path="/" render={props => {
                    return <Home/>
                }} />
                                
                <Route exact path="/account" render={props => <Account />} />
                <Route exact path="/login" render={props => <Login />} />
                <Route exact path="/new-bet" render={props => <NewBet />} />
                <Route exact path="/register" render={props => <Register />} />
                <Route exact path="/reset-password" render={props => <ResetPassword />} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;