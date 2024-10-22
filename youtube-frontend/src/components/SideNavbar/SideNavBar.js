import React from "react";
import "./SideNavBar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const SideNavBar = ({sideNavbar}) => {
  return (
    <div className={ sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
      <div className="home_sideNavbarTop">
        
        <div className={`home_sideNavbarTopOption`} id="ch">
          <HomeIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <VideoCallIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <SubscriptionsIcon />
          <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className={`home_sideNavbarTopOption`}>
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <RecentActorsIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <HistoryIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <SmartDisplayOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Your video</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <WatchLaterOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <ThumbUpOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Liked videos</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <ContentCutIcon />
          <div className="home_sideNavbarTopOptionTitle">Your clips</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">
            Subscription
          </div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img
            className="home_sideNavbar_ImgLogo"
            src="https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg"
            alt="Logo"
          />
          <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img
            alt="logo"
            className="home_sideNavbar_ImgLogo"
            src="https://th.bing.com/th/id/R.bce6ed4af85677ce3b6908ac7e8e631b?rik=DFwXRhY0pZxYIg&pid=ImgRaw&r=0"
          />
          <div className="home_sideNavbarTopOptionTitle">The LallanTop</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img
            alt="logo"
            className="home_sideNavbar_ImgLogo"
            src="https://th.bing.com/th/id/OIP.Ptvb889e_arCEj1IgCROgAHaHa?rs=1&pid=ImgDetMain"
          />
          <div className="home_sideNavbarTopOptionTitle">NDTV India</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
