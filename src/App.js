import './App.css';
import Ducks from './components/Ducks';
import React, { useEffect, useState } from 'react';
import SignIn from './components/SignIn';
import { API_URL } from "./config";

function App() {
  const [imgs, setImgs] = useState([]);
  const [loggedIn, setloggedIn] = useState(null)
  const [modOpen, setmodOpen] = useState(false)
  useEffect(() => {
    fetch(`${API_URL}posts`).then((r) => r.json()).then((r2) => {
      setImgs(r2.posts)
    })
  }, [])
  return (
    <div className="App">
      <div className="header">
        {loggedIn ? <h3>Duckies!</h3>: <button className="signin_button" onClick={() => setmodOpen(true)}>Sign In</button>}
      </div>
      <Ducks images={imgs} loggedIn={Boolean(loggedIn)} setmodOpen={setmodOpen} />
      {modOpen && <SignIn loggedIn={loggedIn} setloggedIn={setloggedIn} />}
    </div>
  );
}

export default App;
