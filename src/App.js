import React from 'react';
import './App.css';
import Navbar from './navbar';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

function App() {
    const responseFacebook = (response) => {
      console.log(JSON.stringify(response));
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div>
      <Navbar className='heading'/>
    
    
      <div className="App">

      <FacebookLogin
        appId="866935980654041"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="91359081244-itaseokvfrj6h8ml9h02fe0t5qrqgo1o.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        
      />
      <br/><br/>
      {/* <div  className='login'><a>Already have an Account?</a></div> */}

      </div>
      </div>
      
    );
  
}

export default App;