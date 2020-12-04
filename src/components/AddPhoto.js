import '../App.css';
import React, { useState } from 'react';
import { getCookie } from '../utilities';
import { API_URL } from "../config";




const AddPhoto = ({setmod2Open, triggerCall}) => {
  const [headline, setHeadline] = useState('');
  const [srcurl, setSrcUrl] = useState('');
  const handleSubmit = (headline, url) => {
      try {
        fetch(`${API_URL}posts`, {
        method: 'POST',
        body: JSON.stringify({headline, image: url}),
        headers: {
            'Authorization': getCookie('duckietoken')
        }
      }).then((r) => r.json()).then(r => {
       triggerCall()
      })
      } catch (error) {
      console.log("ERROR: ", error)
        
      }
    setmod2Open(false)
  }
  return (
    <div className="sign_in">
      <h3>Add a new photo</h3>
      <label>Headline</label>
      <input onChange={(e) => setHeadline(e.target.value)} className="rounded" />
      <label>Url</label>
      <input onChange={(e) => setSrcUrl(e.target.value)} className="rounded" />
      <button className="sign_in_submit rounded" onClick={() => handleSubmit(headline, srcurl)}>Add</button>
      <button className="cancel_button" onClick={() => setmod2Open(false)}>Cancel</button>      
      
    </div>
  )
};

export default AddPhoto;