import React, { useEffect, useState } from "react";
import './App.css';
import { Alert } from '@mui/material';
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Login from './Features/Authorization/Login'
import NavBar from './components/NavBar'
import Tech from './Features/Maker/Tech/Tech'
import TechInfo from './components/TechInfo'
import Home from './components/Home'
import MakerHome from './Features/Maker/MakerHome'
import ClimberHome from './Features/Climber/ClimberHome'
import Location from './Features/Maker/Location/Location'
import About from './components/About'
import SplashCard from '../src/components/SplashCard'


function App() {

  const [user, setUser] = useState(null);
  const [problem, setProblem] = useState([]);
  const [climbproblem, setClimbproblem] = useState([]);


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

useEffect(() => {
  fetch('/climbproblems')
  .then((r) => r.json())
  // .then((data) => console.log(data))
  .then((data) => setClimbproblem(data))
}, []);


useEffect(() => {
  fetch('/problems')
  .then((r) => r.json())
  // .then((data) => console.log(data))
  .then((data) => setProblem(data))
}, []);

if (!user) return (
  <>
  <Container>
    <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
  </Container>
  <Login onLogin={setUser}/>
  </>
)
if (user.admin === true)  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <SplashCard />
      <Routes>
      <Route path="/boltmonkey" 
      element={<MakerHome problem={problem} climbproblem={climbproblem} user={user}/>} 
      ></Route>
      <Route path="/tech" element={<Tech 
      />}></Route>
      <Route path="/techinfo" element={<TechInfo 
      />}></Route>
      <Route path="/location" element={<Location 
      />}></Route>
      <Route path="/climber" 
      element={<ClimberHome 
        problem={problem} 
      climbproblem={climbproblem} user={user}/>} 
      ></Route>
      <Route path="/" element={<Home user={user} problem={problem} 
      climbproblem={climbproblem}/>}></Route>
      </Routes>
    </div>
  )
  if (user.admin === false)  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <SplashCard />

      <Routes>
      <Route path="/techinfo" element={<TechInfo 
      />}></Route>
      <Route path="/gyminfo" element={<About 
      />}></Route>
      <Route path="/climber" 
      element={<ClimberHome 
        problem={problem} 
      climbproblem={climbproblem} user={user}/>} 
      ></Route>
       <Route path="/" element={<Home user={user} problem={problem} 
      climbproblem={climbproblem} />}></Route>
      </Routes>
    </div>
  )
  
  
  ;
}

export default App;
