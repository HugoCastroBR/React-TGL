import React from 'react';
import { Route,Switch,BrowserRouter } from "react-router-dom"
import Home from './home';
import Register from './register';
import Login from './login';
import RecoverPassword from './RecoverPassword';
import NewBet from './newbet';


// To do private route to access the new bet page !

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props => <Home/>}/>
                <Route exact path="/login" render={props => <Login/>}/>
                <Route exact path="/new-bet" render={props => <NewBet/>}/>
                <Route exact path="/register" render={props => <Register/>}/>
                <Route exact path="/reset-password" render={props => <RecoverPassword/>}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;