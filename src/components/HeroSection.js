import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            {/* <img src="/images/pngegg.png" alt="home_img" className="hero-img"/> */}
            <div className='hero-card'>
                <div>
                <h2 className='hero-h2'>Hello World!</h2>
                <p className='hero-p'>Welcome to ADPTIV (Adaptive), an online learning platform to make attending online classes easier.</p>
                
                <Button className='btns' buttonStyle='btn--secondary-outline' buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--secondary' buttonSize='btn--large'>How To Use <i className='far fa-play-circle' /></Button>
                </div>
                {/* <div className='hero-right'>
                <img src="/images/img-1.jpg" alt="home_img" className="hero-img-right"/>
                </div> */}
            </div>
            {/* <div className='hero-h3'>
                <h3 className='hero-p3'>Hello</h3>
            </div> */}
                {/* <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                    <Button className='btns' buttonStye='btn--primary' buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
                </div> */}
                {/* <p className='hero-foot-text'>Stay in the loop with these reminders</p> */}
        </div>
    )
}

export default HeroSection
