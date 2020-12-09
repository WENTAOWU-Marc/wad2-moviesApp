
import React from 'react' ;
import Signup from '../components/authorization/signUp' ;
import Login from '../components/authorization/logIn' ;
import Logout from '../components/authorization/logout' ;
import { useUser } from 'reactfire' ;

function LoginPage ()  {
    const user = useUser();
    
    return (
      < div className = "App" >
        {
          user &&
           <Logout /> 
        }
        {
          !user &&
          <>
             <Signup />
            <Login /> 
          </>
        }
      </ div >
    );
  }
   
  export default LoginPage;