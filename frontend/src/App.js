import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import LoginPage from './pages/login/login.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import LessonCreate from './pages/lesson_create/lesson_create.component';

function App() {
  return (
    <div className = "App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/lesson/create' component={LessonCreate}/>
      </Switch>
    </div>
  );
}

export default App;
