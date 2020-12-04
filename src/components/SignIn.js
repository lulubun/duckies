import '../App.css';
import React, { useState } from 'react';
import { API_URL } from "../config";




const SignIn = ({loggedIn, setloggedIn}) => {
console.log("🚀 ~ file: SignIn.js ~ line 8 ~ API_URL", `${API_URL}signin`)
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [hasAcct, sethasAcct] = useState(true)
  const heading = hasAcct ? 'Sign in if you have an account' : 'Sign up';
  const buttonText = hasAcct ? 'Sign up' : 'Sign in';
  const submitText = hasAcct ? 'go!' : 'submit';
  const handleSubmit = (pass, em) => {
    if(hasAcct) {
      try {
        fetch(`${API_URL}signin`, {
        method: 'POST',
        body: JSON.stringify({email, password: pw})
      }).then((r) => r.json()).then(r => 
        setloggedIn(r))
      } catch (error) {
      console.log("ERROR: ", error)
        
      }
      
    } else {
      try {
        fetch(`${API_URL}signup`, {
          method: 'POST',
          body: JSON.stringify({email, password: pw})
        }).then((r) => r.json()).then(r => 
          setloggedIn(r))
      } catch (error) {
      console.log("ERROR: ", error)
        
      }
    }
  }
  return (
    <div className="sign_in">
      <h3>{heading}</h3>
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} />
      <label>password</label>
      <input onChange={(e) => setPw(e.target.value)} />
      <button onClick={() => handleSubmit(pw, email)}>{submitText}</button>
      <h2>Or</h2>
      <button onClick={() => sethasAcct(!hasAcct)}>{buttonText}</button>
      
    </div>
  )
};

export default SignIn;