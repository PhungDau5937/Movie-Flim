// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Search_icon from "../../assets/search_icon.svg";
import Bell_icon from "../../assets/bell_icon.svg";
import Profile_img from "../../assets/profile_img.png";
import Caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Poppular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="" className="icons" />
        <p>Children</p>

        <img src={Bell_icon} alt="" className="icons" />

        <div className="navbar-profile">
          <img src={Profile_img} alt="" className="profile" />
          <img src={Caret_icon} alt="" className="" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
