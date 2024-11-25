import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

    return (
        <footer class="main-footer">
            <div class="widget-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div id="bullion_our_community-2" class="footer-widget widget_bullion_our_community">
                                <div class="contact-widget">
                                    <div class="widget-title">
                                        <h3>Our Community</h3>
                                    </div>
                                    <div class="widget-content">
                                        <p>Here you'll find regular market updates, expert tips &amp; stories.</p>
                                        <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-99" method="post"
                                            data-id="99" data-name="">
                                            <div class="mc4wp-form-fields">
                                                <div class="form-group">
                                                    <input type="email" name="EMAIL" placeholder="Email address..."
                                                        required />
                                                    <button type="submit">
                                                        <img src="/icon-27.png" alt="Image" /></button>
                                                </div>
                                            </div>
                                            <label style={{display: 'none !important'}}>Leave this field empty if
                                                you're human: <input type="text" name="_mc4wp_honeypot" value=""
                                                    tabindex="-1" autocomplete="off" /></label><input type="hidden"
                                                        name="_mc4wp_timestamp" value="1732275463" /><input type="hidden"
                                                            name="_mc4wp_form_id" value="99" /><input type="hidden"
                                                                name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                            <div class="mc4wp-response"></div>
                                        </form>
                                        <h3>Follow us</h3>
                                        <ul class="social-links clearfix">


                                            <li><a target="_blank" href="https://www.facebook.com"><i
                                                class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a target="_blank" href="https://www.instagram.com"><i
                                                class="fa-brands fa-instagram"></i></a></li>
                                            <li><a target="_blank" href="https://www.pinterest.com"><i
                                                class="fa-brands fa-pinterest-square"></i></a></li>
                                            <li><a target="_blank" href="https://www.twitter.com"><i
                                                class="fa-brands fa-twitter-square"></i></a></li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div id="nav_menu-2" class="footer-widget widget_nav_menu">
                                <div class="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div class="menu-useful-links-container">
                                    <ul id="menu-useful-links" class="menu">
                                        <li id="menu-item-90"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/company/">About Us</a></li>
                                        <li id="menu-item-94"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/education/">Education</a>
                                        </li>
                                        <li id="menu-item-91"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/team/">Meet Our Team</a>
                                        </li>
                                        <li id="menu-item-95"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/history/">History</a></li>
                                        <li id="menu-item-97"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-97">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/our-accounts/">Our
                                                Accounts</a></li>
                                        <li id="menu-item-96"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/markets/">Markets</a></li>
                                        <li id="menu-item-98"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/platform/">Platform</a>
                                        </li>
                                        <li id="menu-item-92"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/faqs/">Faq’s</a></li>
                                        <li id="menu-item-102"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/3-columns/">3 Columns</a>
                                        </li>
                                        <li id="menu-item-103"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/details-page/">Details
                                                Page</a></li>
                                        <li id="menu-item-104"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/list-view-01/">List View
                                                01</a></li>
                                        <li id="menu-item-93"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93">
                                            <a href="https://jan.coderdemo.com/newwp/bullion/contact/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div id="bullion_need_assistance-2" class="footer-widget widget_bullion_need_assistance">
                                <div class="assistance-widget">
                                    <div class="widget-content">
                                        <h3>Need assistance?</h3>
                                        <p>Live chat with our service team for information &amp; assistance.</p>
                                        <div class="assistance-box">
                                            <figure class="assistance-thumb">
                                                <img src="/assistance-1.jpg" alt="Awesome Image" />
                                            </figure>
                                            <h5>Live Chat With</h5>
                                            <div class="link-box">
                                                <a href="https://jan.coderdemo.com/newwp/bullion/team/"><span>Expert</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="bottom-inner">
                        <div class="copyright">
                            <p>&copy; <span>2023 <a href="#">Bullion</a>.</span> All Rights Reserved.</p>
                        </div>
                        <ul class="footer-card clearfix">
                            <li><a href="#"><i class="flaticon-symbols"></i></a></li>
                            <li><a href="#"><i class="flaticon-tool"></i></a></li>
                            <li><a href="#"><i class="flaticon-money"></i></a></li>
                            <li><a href="#"><i class="flaticon-symbol"></i></a></li>
                            <li><a href="#"><i class="flaticon-symbols-1"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;