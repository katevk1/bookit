// Import FirebaseAuth and firebase.
import React from 'react';
import API from '../utils/API'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyBKkQgb-D4kTNT5WfWpaYXdEAX1rc27b64',
  authDomain: 'bookit-79d5c.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
 
class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    user: {}
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  newUser(){
    API.addUser({
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email
    })
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    window.localStorage.setItem("name", firebase.auth().currentUser.displayName)
    window.localStorage.setItem("email", firebase.auth().currentUser.email)
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome <img src={firebase.auth().currentUser.photoURL} alt="User"/> {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}
export default SignInScreen