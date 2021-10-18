import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import { UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove } from 'features/user';
import { Home, Navigation } from 'features/common';


export default function App() {
  return (
    <>
    
      <Navigation/>
        <Switch>
          <Route exact path='/' component= { Home }/>
          <Redirect from='/home' to= { '/' }/>
          <Route exact path='/user-add' component= { UserAdd }/>
          <Route exact path='/user-detail' component= { UserDetail }/>
          <Route exact path='/user-list' component= { UserList }/>
          <Route exact path='/user-login' component= { UserLogin }/>
          <Route exact path='/user-modify' component= { UserModify }/>
          <Route exact path='/user-remove' component= { UserRemove }/>
        </Switch>
        
    </>
  
  );
}


