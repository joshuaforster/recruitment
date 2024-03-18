import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp(){

    const [signUpData, setSignUpData] = React.useState({
        email:'',
        password:'',
    })

    function handleChange(e){
        const {name, value} = e.target

        setSignUpData(prevData =>({
            ...prevData,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        // pasted from firebase
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email Address'
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={signUpData.email}
                />
                <input
                    placeholder='Password'
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    value={signUpData.password}
                />
                <button>Sign Up</button>
            </form>
        </>
    )
}