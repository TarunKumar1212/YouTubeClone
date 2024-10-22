import React,{useState} from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link , useNavigate} from "react-router-dom";
import Login  from "../Login/Login";

function NavBar({setsideNavbarFun,sideNavbar}) {

  const [userPic, setuserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain")
  const [navbarModal, setnavbarModal] = useState(false)
  const [login, setlogin] = useState(false)

  const navigate = useNavigate();


  const handleClickModel= () =>{
    setnavbarModal(prev=>!prev)
  }

  const sideNavbarFun= () =>{
    setsideNavbarFun(!sideNavbar)
  }

  const handleProfile = () => {
    navigate('/user/23')
    setnavbarModal(false)
  } 


  const setLoginModel = () =>{
    setlogin(false)
  }

  const onClickPopUpOption =(button) => {

    setnavbarModal(false)

    if(button === "login")
    { 
      setlogin(true)
    }else{

    }
  }


  return (
    <div className="navbar">
      <div className="navbar-left">
        <div onClick={sideNavbarFun} className="navbarHamberger">
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <Link to={"/"} className="nabar-youtubeImg">
          <YouTubeIcon
            sx={{
              fontSize: "34px",
              color: "red",
            }}
            className="nabbar-youtubeImg"
          />
          <div className="navbar-utubeTitle">YouTube</div>
        </Link>
      </div>

      <div className="navBar-center">
        <div className="navBar-searchBox">
          <input type="text" className="searchBox" placeholder="Search " />
          <div className="navbar_searchIconBox">
            
            <SearchIcon 
            sx={{ 
              fontSize: "28px",
               color: "white"
                }}
               />
               
          </div>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon 
          sx={{
            color:"white"
          }}
          />
        </div>
      </div>

      <div className="navbar-right" >
      <Link to={'/23/upload'}>
      <VideoCallIcon 
        sx={{
          fontSize:"30px",
          cursor:"pointer",
          color:"white"
        }}
      />
      </Link>
      <NotificationsIcon 
        sx={{
          fontSize:"30px",
          cursor:"pointer",
          color:"white"
        }}
      />

      <img onClick ={handleClickModel} src={userPic} alt="Logo" className="navbar-right-logo" />
      
      {navbarModal &&
      <div className="navbar-modal">
        <div className="navbar-modal-option" onClick={handleProfile}> Profile </div>
        <div className="navbar-modal-option" onClick={()=>{onClickPopUpOption("logout")}}> Logout </div>
        <div className="navbar-modal-option" onClick={()=>{onClickPopUpOption("login")}}> Login </div>
      </div>
      }
      </div>



      {
        login && <Login/>
      }

    </div>
  );
}

export default NavBar;
