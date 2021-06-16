import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import './Contact.css';
import contactVector from './../../Asset/contact_anime.png';
import github from './../../Asset/gh.png';
import linkedin from './../../Asset/li.png';
import Heading from '../Heading/Heading';

const Contact = () => {
    return (
        <div className='section-container'>
            <Heading
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form action="https://formspree.io/f/xknkbzkv" method="POST"  className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

    
            <div className='social-icons-container'>
                <a href='https://github.com/priyansh11786' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/priyansh-darji-103a1a191/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;