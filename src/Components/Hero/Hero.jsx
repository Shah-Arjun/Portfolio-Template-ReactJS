import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.png'
import mypic2 from '../../assets/mypic2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero"> 
     
     <div className="hero-inner">
       {/* left '<' symbol */}
      <span id='left-symbol'> &lt; </span>

      <img src={profile_img1} alt="arjun's_profile _img" className='hero-image' />

      {/* left '<' symbol */}
      <span id='right-symbol'> /&gt; </span>
     </div>

      <h1><span>I'm Arjun Shah,</span> Fullstack developer based in Nepal.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, assumenda! Non consectetur vitae eius a.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
