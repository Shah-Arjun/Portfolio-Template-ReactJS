import React, { useState } from "react";
import "./Navbar.css"; //external css for navbar
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";

function Navbar() {


  const [menu, setMenu] = useState("home");       {/*to store the state og menu, initially is hone*/}

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li><p onClick={()=>setMenu("home")}>Home</p>{ menu === "home"?<img src={underline} /> : <></> }</li>   {/* menu home ho vane unerline image dekha ntr ntg*/}
        <li><p onClick={()=>setMenu("about")}>About</p>{ menu === "about"?<img src={underline} /> : <></> }</li>
        <li><p onClick={()=>setMenu("services")}>Services</p>{ menu === "services"?<img src={underline} /> : <></> }</li>
        <li><p onClick={()=>setMenu("work")}>Portfolio</p>{ menu === "work"?<img src={underline} /> : <></> }</li>
        <li><p onClick={()=>setMenu("contact")}>Contact</p>{ menu === "contact"?<img src={underline} /> : <></> }</li>
      </ul>
      {/* contact me button */}
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
