import '../App.css';
import up from '../up.png';
import down from '../down.png';
import { API_URL } from "../config";
import { getCookie } from '../utilities';
import React, { useState } from 'react';


const DuckCard = ({data, loggedIn, setmodOpen, id}) => {
  const [upvotes, setUpvotes] = useState(data.upvotes)
  const vote = (direction) => {
    const token = getCookie('duckietoken')
    try {
      fetch(`${API_URL}posts/${id}/${direction}`, {
      method: 'POST',
      headers: {
        'Authorization': token,
      }
    }).then((r) => r.json()).then(r => {
      setUpvotes(r.upvotes)
    })
    } catch (error) {
    console.log("ERROR: ", error)
      
    }
  }
  return (
    <div className="duck_card">
      <h3 className="duck_headline">{data.headline}</h3>
      <img className="duck_image" src={data.image} alt="duckie" />
      <div className="stats">
        <button onClick={() => !loggedIn ? setmodOpen(true) : vote('upvote')} className="arrow_button">
          <img className="arrow" src={up} alt="up" />
        </button>
        <p>{upvotes}</p>
        <button onClick={() => !loggedIn ? setmodOpen(true) : vote('downvote')} className="arrow_button">

          <img className="arrow" src={down} alt="down" />
        </button>
      </div>
    </div>
  )
};

export default DuckCard;