// Import FirebaseAuth and firebase.
import React from 'react';
import API from '../utils/API'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Link } from "react-router-dom";

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
        <div className="signIn">
        

      {/* <div className="icon-block">
      <div className="col s12 m4">
          <div className="hvrbox">
            <h2 className="center brown-text">
              <img src={'https://rotocolorrhythm.com/wp-content/uploads/2014/09/a-to-b-boxed.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
            <div className="hvrbox-layer_top"><div className="hvrbox-text">Chipper Jones</div>
            </div></div>
        </div>
      </div> */}
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    this.newUser()
    return (
      <div className="fireBase">
        <h5>Thanks for signing in! Head back to the <Link to="/">home page</Link></h5>
        <p>Welcome  {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <div className="googleImage"><img src={firebase.auth().currentUser.photoURL} alt="User"/></div>
        <div className="signinButton">
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button></div>
      </div>

      




    );
  }
}
export default SignInScreen