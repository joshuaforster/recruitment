import React from 'react'
import { useLocation } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function SignIn(){

    const location = useLocation()
    console.log(location)

    const [loginData, setLoginData] = React.useState({
        email:'',
        password:'',
    })

    function handleChange(e){
        const {name, value} = e.target

        setLoginData(prevData =>({
            ...prevData,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()


const auth = getAuth();
signInWithEmailAndPassword(auth, loginData.email, loginData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
    return(
        <>
            {location? <h1>Sign in</h1>: ''}
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email Adress'
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={loginData.email}
                />
                <input
                    placeholder='Password'
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    value={loginData.password}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

