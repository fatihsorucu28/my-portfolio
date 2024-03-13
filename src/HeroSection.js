import React from 'react';
import Typewriter from './Typewriter';



const HeroSection = ({ scrollToAbout }) => {
  return (
    <div className="hero">
      <Typewriter />
      <div className="about-me">
        <h2>About Me</h2>
        <hr className='hr'></hr>
        <p>
          I am a freshman at BYUI with a passion for programming. I am proficient in C++, JavaScript, and Python. I am particularly interested in Web Development and Artificial Intelligence.
        </p>
        <div className='button-container' onClick={scrollToAbout}>
        <div class='button'>
            <div class='line'></div> 
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <span>Download CV</span>
        </div>
        </div>
        </div>
        </div>

  );
}

export default HeroSection;
