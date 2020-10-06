import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

import LoginPage from './pages/login/login.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import LessonCreate from './pages/lesson_create/lesson_create.component';
import LessonIndexPage from './pages/lesson_index/lesson_index.component';
function App({currentUser}) {
  return (
    <div className = "App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route 
          exact path='/login' 
          render={()=> currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginPage/>
                )
              } 
          />
        {LessonRoutes()}
      </Switch>
    </div>
  );
}

const LessonRoutes = () => ([
  <Route exact path='/lesson' component={LessonIndexPage} />,
  <Route exact path='/lesson/create/' component={LessonCreate} />
]);

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App);