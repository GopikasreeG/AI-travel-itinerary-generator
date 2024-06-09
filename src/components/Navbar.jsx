/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../images/hello.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="leftpart">
          <div className="logo">
            <img
              src={logo}
              alt=""
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="namelogo"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
