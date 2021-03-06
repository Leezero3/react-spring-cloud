import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove } from 'features/user';
import { Home } from 'features/common';

export default function App(){
  return (
    <>
      <div className="App">
         <Switch>
          <Route exact path='/' component= { Home }/>
          <Redirect from='/home' to= { '/' }/>
          <Route exact path='/users/add' component={UserAdd}/>
          <Route exact path='/users/detail' component={UserDetail}/>
          <Route exact path='/users/list' component={UserList}/>
          <Route exact path='/users/login' component={UserLogin}/>
          <Route exact path='/users/modify' component={UserModify}/>
          <Route exact path='/users/remove' component={UserRemove}/>
        </Switch>
        </div>
    </>
  
  );
}


