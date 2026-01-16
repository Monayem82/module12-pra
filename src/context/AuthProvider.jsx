import React from 'react';

const AuthContext = React.createContext();


export const AuthProvider = ({children}) => {
    const [user,setUser] = React.useState({
        name: 'Guest',
        isLoggedIn: false,
        email: null
    });
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;
