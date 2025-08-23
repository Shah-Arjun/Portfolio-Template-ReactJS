import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'> 
      <img src={profile_img} alt="profile img" />
      <h1><span>I'm Arjun Shah,</span> Fullstack developer based in Nepal.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, assumenda! Non consectetur vitae eius a.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
