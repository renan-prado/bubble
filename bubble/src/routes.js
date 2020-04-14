import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Chat from './Chat';
import ChatList from './Chat/ChatList';
import Feed from './Feed';
import Games from './Games';
import Group from './Group';
import Profile from './Profile';
import Rank from './Rank';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/chat/:id" component={Chat}></Route>
                <Route path="/chat/" component={ChatList}></Route>
                <Route path="/" exact component={Feed}></Route>
                <Route path="/game" component={Games}></Route>
                <Route path="/group" component={Group}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/ranking" component={Rank}></Route>
            </Switch>
        </BrowserRouter>
    )
}