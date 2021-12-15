import React, { useState } from "react";
import { useSelector } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";

import "./Header.css";

const Header = () => {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  return (
    <div className="header">
      <div className="nav-container">
        <div className="nav-item">
          <p className="title">BlockIt</p>
        </div>
        <div className="nav-item">
          <p>Patterns</p>
        </div>
        <div className="nav-item">
          <p>Stash</p>
        </div>
        <div className="nav-item">
          <p>Community</p>
        </div>
        <div className="nav-item">
          <LogOutButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
