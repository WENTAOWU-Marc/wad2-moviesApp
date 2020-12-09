
import React from 'react' ;
import { useFirebaseApp,useUser } from 'reactfire' ;
import 'firebase/auth';
 
const Logout = () => {
  // Import firebase
  const firebase = useFirebaseApp();
  // Log out function
  const handleClick = () => {
    firebase.auth().signOut().then(function() {
      var user = firebase.auth().currentUser;
      console.log(user)
      window.location.replace("./");
    });
  }
 
  return (
    <>
       <button type="button" onClick={handleClick}>Log Out</button> 
    </>
  )
};
 
export default Logout;