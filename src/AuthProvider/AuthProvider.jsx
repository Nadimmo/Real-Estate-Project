import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase.config.js'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);

    const Register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }
    const SignOut = ()=>{
        return signOut(auth)
    }

     const profileUpdate = (firstName, designation) => {
        return updateProfile(auth.currentUser, {
            displayName: firstName + " " + designation
        })
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            Unsubscribe()
        }
    }, [])

    const info = {
        user,
        Register,
        Login,
        SignOut,
        profileUpdate
    }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider