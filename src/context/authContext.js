import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from "../firebase"; 

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export const AuthProvider=({children})=>{

    const [user, setUser] = useState(null);
    
    const [teams, setTeams] = useState({
        data:[]
    })


    const [loading, setLoading] = useState(true);
    const signup=(email,password)=>{
       return  createUserWithEmailAndPassword(auth,email,password);
    }

    const login =async (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout =()=> signOut(auth);

    const loginWithGoogle=()=>{
       const googleProvider= new GoogleAuthProvider();
       return signInWithPopup(auth,googleProvider);
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    const addTeams = (team)=>{
        let data= teams.data;
        data.push(team);
        setTeams({...teams,['data']:data})
    }

    useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();
    }, [])
    
    return (
        <authContext.Provider value={{signup,login,user,logout,loading,loginWithGoogle,resetPassword,teams,addTeams}}>
            {children}
        </authContext.Provider>
    )
}