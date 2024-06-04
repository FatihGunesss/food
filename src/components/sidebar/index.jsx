import { Link } from "react-router-dom";
import Logo from "assets/image/icons/Logo.svg";
import {
  Home,
  Discount,
  Dashboard,
  Message,
  Notification,
  Settings,
  Logout
} from "assets/image/icons";
import { useState } from "react";



import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Sidebar = ({className}) => {
  const [actived, setActived] = useState(2);

  const menuData = [
    {
      id: 2,
      title: "Home",
      path: "/",
      icon: <Home />,
    },
    {
      id: 3,
      title: "Discount",
      path: "/discount",
      icon: <Discount />,
    },
    {
      id: 4,
      title: "Dashboard",
      path: "/dashboard",
      icon: <Dashboard />,
    },
    {
      id: 5,
      title: "Message",
      path: "/message",
      icon: <Message />,
    },
    {
      id: 6,
      title: "Notification",
      path: "/notification",
      icon: <Notification />,
    },
    {
      id: 7,
      title: "Settings",
      path: "/settings",
      icon: <Settings />,
    },

    {
      id: 8,
      title: "Logout",
      path: "/logout",
      icon: <Logout />,
    }
  ];
  return (
    <div className={className + " sidebar-wrapper__icons"}>
      <img className="sidebar-logo" src={Logo} alt="Logo" />
      <ul className="nav-wrap">
        {menuData.map((item, index) => (
          <li onClick={() => setActived(item.id)} className={actived === item.id ? "active-menu nav-item" : "nav-item"} key={index}>
            <Link to={item.path}>
              <span className="back">{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
