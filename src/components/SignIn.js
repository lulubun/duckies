import '../App.css';
import React, { useState } from 'react';
import { API_URL } from "../config";




const SignIn = ({loggedIn, setloggedIn, setmodOpen}) => {
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [hasAcct, sethasAcct] = useState(true)
  const heading = hasAcct ? 'Sign in to vote' : 'Sign up to vote';
  const buttonText = hasAcct ? 'Sign up' : 'Sign in';
  const submitText = hasAcct ? 'go!' : 'submit';
  const handleSubmit = (pass, em) => {
    if(hasAcct) {
      try {
        fetch(`${API_URL}signin`, {
        method: 'POST',
        body: JSON.stringify({email, password: pw})
      }).then((r) => r.json()).then(r => {
        document.cookie = `duckietoken=${r.token}`;
        setloggedIn(true)
      })
      } catch (error) {
      console.log("ERROR: ", error)
        
      }
      
    } else {
      try {
        fetch(`${API_URL}signup`, {
          method: 'POST',
          body: JSON.stringify({email, password: pw})
        }).then((r) => r.json()).then(r => {
          document.cookie = `duckietoken=${r.token}`;
          setloggedIn(true)
        })
      } catch (error) {
      console.log("ERROR: ", error)
        
      }
    }
    setmodOpen(false)
  }
  return (
    <div className="sign_in">
      <h3>{heading}</h3>
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} className="rounded" />
      <label>password</label>
      <input onChange={(e) => setPw(e.target.value)} className="rounded" />
      <button className="sign_in_submit rounded" onClick={() => handleSubmit(pw, email)}>{submitText}</button>
      <h2>Or</h2>
      <button className="rounded" onClick={() => sethasAcct(!hasAcct)}>{buttonText}</button>
      <button className="cancel_button" onClick={() => setmodOpen(false)}>Cancel</button>      
      
    </div>
  )
};

export default SignIn;