import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
 
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDjCBquy6qJXA9mAKG0HBaIn9zqyJdmUL4",
  authDomain: "superchat-a87dc.firebaseapp.com",
  projectId: "superchat-a87dc",
  storageBucket: "superchat-a87dc.appspot.com",
  messagingSenderId: "560465883928",
  appId: "1:560465883928:web:db0a5c4f812d880f14e46d"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
const [ user ] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Yaniv`s Chat app</h1>
        <p>The app is a real time chat app, You can go ahead and log-in with your google account.</p>
        {user ? <ChatRoom firebase={firebase}/> : <SignIn auth={auth} />}
      </header>
    </div>
  );
}

export default App;
