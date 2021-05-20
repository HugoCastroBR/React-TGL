/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import Home from './home';
import Register from './register';
import Login from './login';
import ResetPassword from './resetPassword';
import NewBet from './newBet';
import useTGL from './../hooks/useStore';
import Account from './account';
import UpdatePassword from './updatePassword';


// To do private route to access the new bet page !

const Routes = () => {

    const isAuth = () => {
        const token = localStorage.getItem("token")
        return token?.length && true
    }

    const { states } = useTGL()

    return (
        <BrowserRouter>
            <Switch>
                
                {states.Auth.isAuth || isAuth() ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/" to="/login" />
                }
                {states.Auth.isAuth || isAuth() ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/new-bet" to="/login" />
                }
                {states.Auth.RegisterSuccess &&
                    <Redirect exact from="/register" to="/login" /> 
                }
                {states.Auth.RegisterSuccess &&
                    <Redirect exact from="/update-password/:token" to="/login" /> 
                }

                <Route exact path="/" render={props => {
                    return <Home/>  
                }} />
                
                <Route exact path="/account" render={props => <Account />} />
                <Route exact path="/login" render={props => <Login />} />
                <Route exact path="/new-bet" render={props => <NewBet />} />
                <Route exact path="/register" render={props => <Register />} />
                <Route exact path="/reset-password" render={props => <ResetPassword />} />
                <Route exact path="/update-password/:token" render={props => <UpdatePassword />} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;