import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Make sure to import these

export default function ProtectedPath(){

    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    React.useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("Auth state changed:", user);
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);
    
  

    return(
        <>
            {isAuthenticated? <Outlet /> : <Navigate to='/login' state={{message: "You must log in first"}}  />}
        </>
    )
}