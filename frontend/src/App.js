import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import LoginPage from './pages/login/login.component.jsx';
import NavigationBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className = "App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
