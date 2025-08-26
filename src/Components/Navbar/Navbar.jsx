import React, { useState } from "react";
import "./Navbar.css"; //external css for navbar
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {


  const [menu, setMenu] = useState("home");       {/*to store the state og menu, initially is hone*/}

  return (
    <div id="home" className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
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
