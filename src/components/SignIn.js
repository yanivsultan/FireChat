import React from 'react'
import firebase from 'firebase/app'



const SignIn = ({auth}) => {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={SignInWithGoogle}>Sign in with google</button>
        </div>
    )
}

export default SignIn
