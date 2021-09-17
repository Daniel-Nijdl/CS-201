import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../util/context";

const SidebarButton = () => {
  const { openSideBar } = useAppContext();
  return (
    <button className="sidebar-toggle" onClick={openSideBar}>
      <FaBars />
    </button>
  );
};

export default SidebarButton;
