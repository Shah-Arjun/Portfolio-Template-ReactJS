import React, { useState, useRef } from "react";
import "./Navbar.css"; //external css for navbar
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

function Navbar() {

// to store the state og menu, initially is hone
  const [menu, setMenu] = useState("home"); 
  
  // for open close menu button
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div id="home" className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />  {/* menu icon for small mobile */}
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />    {/* menu close X icon for mobile */}
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{ menu === "home"?<img src={underline} /> : <></> }</li>   {/* menu home ho vane unerline image dekha ntr ntg*/}
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{ menu === "about"?<img src={underline} /> : <></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{ menu === "services"?<img src={underline} /> : <></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{ menu === "work"?<img src={underline} /> : <></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{ menu === "contact"?<img src={underline} /> : <></> }</li>
      </ul>
      {/* contact me button */}
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
