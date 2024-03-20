import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Make sure to import these


export default function ProtectedPath() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        // Note for future improvement:
        // Consider adding unsubscribe logic here to clean up the subscription
        // when the component unmounts. This will prevent potential memory leaks
        // and other side effects of stale subscriptions.
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ message: "You must log in first" }} />}
        </>
    );
}
