import React, { createContext } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const hamim = { age: 55, name: 'Hamim Hossain'}

    const authInfo = {
        hamim
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;