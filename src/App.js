import './App.css';
import Ducks from './components/Ducks';
import React, { useEffect, useState } from 'react';
import SignIn from './components/SignIn';
import AddPhoto from './components/AddPhoto'
import { API_URL } from "./config";
import { getCookie } from './utilities';

function App() {
  const [imgs, setImgs] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [modOpen, setmodOpen] = useState(false);
  const [mod2Open, setmod2Open] = useState(false);
  const duckietoken = getCookie('duckietoken');
  const getAllDucks = () => {
    const fetchObj = {
      method: 'GET',
    }
    if (duckietoken) {
      fetchObj.headers = {
        'Authorization': duckietoken
      }
    };
    fetch(`${API_URL}posts`, fetchObj).then((r) => r.json()).then((r2) => {
      setImgs(r2.posts)
    })
  }

  const buttonFunction = () => {
    if(loggedIn) {
      setloggedIn(false);
      document.cookie = `duckietoken=; expires=${new Date(new Date().getTime() + 1000)}`;
    } else {setmodOpen(true)}
  };
  const buttonStr = loggedIn ? 'Sign Out' : 'Sign In';
  useEffect(() => {
    duckietoken && setloggedIn(true);
    getAllDucks();
  }, [])
  return (
    <div className="App">
      <div className="header">
        <button className="signin_button" onClick={buttonFunction}>{buttonStr}</button>
      </div>
      <Ducks images={imgs} loggedIn={loggedIn} setmodOpen={setmodOpen} />
      <button className="duck_card" onClick={() => loggedIn ? setmod2Open(true) : setmodOpen(true)}>+ add a duckie</button>
      {modOpen && <SignIn loggedIn={loggedIn} setloggedIn={setloggedIn} setmodOpen={setmodOpen} />}
      {mod2Open && <AddPhoto setmod2Open={setmod2Open} triggerCall={getAllDucks} />}
    </div>
  );
}

export default App;
