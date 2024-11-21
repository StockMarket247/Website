import React, { useState } from 'react';
import './style.css';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

    return (
        <div className='footer-main'>
            <div className='footer'>
                <div className='footer-in'>
                    
                    <div className='contact-area'>
                        <h1>Our Community</h1>
                        <p>Here you'll find regular market updates, expert tips & stories.</p>
                        <form className='news-letter'>
                            <input type='email' placeholder='Email address...' className='news-letter-input no-focus-highlight' required />
                            <button className='news-letter-button pointer'>
                                <SendIcon sx={{ transform: 'rotate(-45deg)', color: '#fff' }} />
                            </button>
                        </form >
                        <h5>Follow us</h5>
                        <ul className='li-contact'>
                            <li><i class="fa-brands fa-facebook" /></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-square-pinterest" /></li>
                            <li><i class="fa-brands fa-square-twitter" /></li>
                        </ul>
                    </div>

                    <div className='links-area'>
                        <h1>Useful Links</h1>
                        <div className='linkers'>
                            <ul className='linkers-link'>
                                <li className='pointer spacing highlight'>About Us</li>
                                <li className='pointer spacing highlight'>Meet Our team</li>
                                <li className='pointer spacing highlight'>Our Accounts</li>
                                <li className='pointer spacing highlight'>Platform</li>
                            </ul>
                            <ul className='linkers-link'>
                                <li className='pointer spacing highlight'>Education</li>
                                <li className='pointer spacing highlight'>History</li>
                                <li className='pointer spacing highlight'>Markets</li>
                                <li className='pointer spacing highlight'>Faq's</li>
                                <li className='pointer spacing highlight'>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className='widget-area'>
                        <h1>Need assistance?</h1>
                        <p>Live chat with our service team for information & assistance.</p>
                        <div className='assistance-bar'>
                            <div className='assistant'>
                                <div className='assistane-img'>
                                    <div className='assistance-badge' />
                                    <img className='assistant-image' src='/assistance-1.jpg' />
                                </div>
                            </div>
                            <div className='chat'>
                                <h4 style={{ marginBottom: '5px' }}>Live Chat With</h4>
                                <span className='chat-button highlight pointer' >
                                    Expert <ArrowForwardIcon className='chatIndicate highlight' />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer-sub'>

                <div className='footer-inner'>
                    <div>© 2023 Bullion. All Rights Reserved.</div>
                    <div>
                        <ul className='li-support'>
                            <li><i class="fa-brands fa-cc-visa" /></li>
                            <li><i class="fa-brands fa-cc-mastercard" /></li>
                            <li><i class="fa-brands fa-cc-paypal" /></li>
                            <li><i class="fa-brands fa-usps" /></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Footer;