import React from 'react'
import Heading from '../Heading/Heading'
import aboutVector from './../../Asset/about_vector.png'
import aboutAnime from './../../Asset/about_anime.gif';
import './About.css'
import FooterLink from '../FooterLink/FooterLink';

function About() {
    return (
        <div className="section-container">
            <Heading heading="About Me"
                details="Web Developer | Blogger | Biblophile" />

            <div className='about-main'>
                <div className='about-main-left'>
                    
                    <h3 className='about-sub-head'>Web Developer</h3>
                    <p className='about-details'>
                        I Started Learning Web Development about 8 months ago,since then I have
                        Acquired various skills in that domain and made several Web dev Projects.
                        I am quite well versed with front-end development now and look forward to Learning
                        Fullstack development using JavaScript
                    </p>

                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I have recently started writing blogs on the platform Medium regarding topics like
                        Development, Technologies and Books.
                    </p>

                    <h3 className='about-sub-head'>Hobbies</h3>
                    <p className='about-details'>
                        I am also a frequent Reader, I like reading books and articles reagrding variety of 
                        topics that are available be it Finance books,Productivity books,Lifestyle Books or 
                        Technology Articles
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />


            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about" />
            </div>
        </div>
    )
}

export default About
