import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const navigate = useNavigate();
    const location = useLocation();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((userCredential) => {
                // Signed in
                navigate('/jobsubmission');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // Update the state to display error message
                setError("Failed to sign in. Please check your credentials.");
                console.error(errorMessage); // Log error message for debugging
            });
    }

    return (
        <div className='mt-4'>
            <div className='px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto'>
                {location && <h1 className="text-2xl font-bold my-4">Sign in</h1>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        value={loginData.email}
                    />
                    <input
                        className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder='Password'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                        value={loginData.password}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
