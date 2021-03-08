import React from 'react'
import firebase from 'firebase/app'
import './SignIn.css'


const SignIn = ({auth}) => {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className='SignIn'>
             <h1>Welcome to Yaniv`s Chat app</h1>
             <p>The app is a real time chat app, You can go ahead and log-in with your google account.</p>
            <button onClick={SignInWithGoogle}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default SignIn
