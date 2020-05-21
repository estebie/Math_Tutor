import React from 'react';
import NavigationBar from '../nav-bar/nav-bar.component';

const IsAuthenticated = WrappedComponent => ({user}) => {
    console.log(user);    
    return (    
        <div>
            <NavigationBar/>
            <WrappedComponent/> 
        </div>
    )
}


  
export default IsAuthenticated;