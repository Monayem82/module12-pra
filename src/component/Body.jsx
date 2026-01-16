import React from 'react';
import { useAuth } from '../context/useAuth';


const Body = () => {
    const userinfo=useAuth()
    console.log(userinfo);

    const handleUserForClick=()=>{ 
        userinfo.user.name == "Guest" ?(
            userinfo.setUser({
            name: 'Ashit Sarker',
            isLoggedIn: true,
            email: 'email@gamil.com'
        })
        ) : (
            userinfo.setUser({
            name: 'Guest',
            isLoggedIn: false,
            email: null
        })
        )
        
    };

    return (
        <div>
            <h1>Welcome {userinfo.user.name}</h1>
            <p>Now you are logged in {userinfo.user.isLoggedIn}</p>
            <h1>This is body</h1>
            <button className='yellow' onClick={()=>handleUserForClick()}>Change user name by on click</button>
        </div>
    );
};

export default Body;