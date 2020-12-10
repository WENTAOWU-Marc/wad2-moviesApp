import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined, StarOutlined, VideoCameraOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useUser } from "reactfire"
import 'firebase/auth';

function handleMenuClick(e) {
  // message.info("Click on menu item.");
  console.log("click", e);
}

const moviemenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
    <Link to="/">
      HomePage
    </Link>
    </Menu.Item>
    <Menu.Item key="2" >
      <Link to="/movies/upcomings">
      Upcoming
      </Link>
    </Menu.Item>
    <Menu.Item key="3"  >
      <Link to="/movies/nowplayings">
      Nowplaying
      </Link>
    </Menu.Item>
  </Menu>
);

const actorMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
    <Link to="/actors/actor">
      ActorPage
    </Link>
    </Menu.Item>
  </Menu>
);

const preferMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
    <Link to="/movies/favorites" data-cy="favor-link">
      Favourite
    </Link>
    </Menu.Item>
    <Menu.Item key="2" >
      <Link to="/movies/watchlist" data-cy="watchlist-link">
      WatchList
      </Link>
    </Menu.Item>
  </Menu>
);

const SiteHeader = () => {
  const user = useUser();
  return (
    
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar navbar-expand ">
      
      <Dropdown overlay={moviemenu} >
        <Button icon={<VideoCameraOutlined />} size="small" >
          Movies <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown overlay={actorMenu}  >
        <Button icon={<UserOutlined/>} size="small">
          Actors <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown overlay={preferMenu}>
        <Button icon={<StarOutlined />} size="small">
          Prefers <DownOutlined />
        </Button>
      </Dropdown>
      </nav>

      <nav className="navbar-brand text-white"  >
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>

      {/* <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      /> */}

      {/* <nav>
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      </nav> */}

       <nav className="navbar navbar-expand ">
         <ul className="navbar-nav">
           <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              {user.data ? user.data.displayName : "login"}
            </Link>
           </li>
         </ul>
       </nav>

      {/* <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      /> */}

       </nav>
    //   <nav className="navbar navbar-expand ">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/actors/actor">
    //           Actor
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/upcomings">
    //           Upcoming
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/nowplayings">
    //           Nowplaying
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/favorites">
    //           Favorites
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/watchlist">
    //           WatchList
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    

    
  );
};

export default SiteHeader;