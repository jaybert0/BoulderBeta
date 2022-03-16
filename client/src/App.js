import React, { useEffect, useState } from "react";
import './App.css';
import { Alert } from '@mui/material';
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Login from './components/Login'
import NavBar from './components/NavBar'
import Technique from './components/Technique'
import Home from './components/Home'



function App() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}

if (!user) return (
  <>
  <Container>
    <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
  </Container>
  <Login onLogin={setUser}/>
  </>
)
  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      
      <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
      <Routes>
      <Route path="/tech" element={<Technique/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
