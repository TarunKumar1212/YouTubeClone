import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/home'
import { useState} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Video from './pages/Video/Video';
import Profile from './pages/Profile/Profile.js';
import VideoUpload from './pages/VideoUpload/VideoUpload.js';
import SignUp from './pages/SignUp/SignUp.js'



function App() {
  const [sideNavbar, setsideNavbar] = useState(true)

  const setSideNavbarFunc = (value) =>{
    setsideNavbar(value)
  }
  return (

    <BrowserRouter>
    <div className="App">

      <NavBar sideNavbar = {sideNavbar} setSideNavbarFunc ={setSideNavbarFunc}/>
      <Routes>
        <Route path='/' element={<Home sideNavbar = {sideNavbar}/>} />
        <Route path='/watch/:id' element={<Video/>}/>
        <Route path='/user/:id' element={<Profile sideNavbar = {sideNavbar}/>}/>
        <Route path='/:id/upload' element={<VideoUpload/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;


