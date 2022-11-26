import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

//---create user with email and password---//
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

//---sign in with email and password---//
const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}



//---update user name---//
const userProfile = (name) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name})
}

//---sign in with google---//
const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

//---sign in with google---//
const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('I am from onAuthStateChanged', currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    } ,[])

    const authInfo = {
        createUser,
        userProfile,
        googleSignIn,
        signIn,
        loading,
        logOut,
        user,

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