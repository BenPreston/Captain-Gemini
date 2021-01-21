// Firebase
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// Styles
import "./App.css";
import { Button } from "@material-ui/core";
import Logo from './assets/CaptainGeminiLogo.gif'

// Components
import CapGem from './components/CapGem'


const auth = firebase.auth()

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
        {user ? <CapGem /> : <SignIn />}
    </div>
  );
}

function SignIn () {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className='SignIn'>
      <img src={Logo} alt=""/>
      <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  )
}

export default App;