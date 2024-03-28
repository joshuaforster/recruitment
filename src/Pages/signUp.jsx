import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(''); // State to store error message

    function handleChange(e) {
        const { name, value } = e.target;
        setSignUpData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
            .then((userCredential) => {
                // Signed up
                navigate('/jobsubmission'); // Navigate on successful sign up
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError("Failed to sign up. " + errorMessage); // Display a generic error message
                console.error(errorMessage); // Log error message for debugging
            });
    }

    return (
        <div className='mt-4'>
            <div className='px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto'>
                <h1 className="text-2xl font-bold my-4">Make an account</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        value={signUpData.email}
                    />
                    <input
                        className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder='Password'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                        value={signUpData.password}
                    />
                    {error && <div className="text-red-500 text-sm my-2">{error}</div>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
