import React from "react";
import logo from "../util/logo.svg";
import { links, socials } from "../util/consts";
import { Link } from "react-router-dom";
import { useAppContext } from "../util/context";
import { FaTimes } from "react-icons/fa";

const filterList = ["error"];

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useAppContext();

  return (
    <aside className={`sidebar ${sidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links
        .filter((link) => !filterList.includes(link.text))
        .map((link) => {
          const {id, url, text, icon} = link;
          return(
            <li key={id}>
              <Link to={url}>
                {icon} {text}
              </Link>
            </li>
          )
        })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
