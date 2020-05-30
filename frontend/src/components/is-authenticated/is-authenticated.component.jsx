import React from 'react';
import NavigationBar from '../nav-bar/nav-bar.component';
import { Redirect } from 'react-router-dom';

const IsAuthenticated = WrappedComponent => ({user}) => {
    let content;
    if (user){
        content = <div><NavigationBar/><WrappedComponent/></div>;
    } else {
        content = <div><Redirect to="/login"/></div>;
    }
    return (
        content
    )
}


  
export default IsAuthenticated;