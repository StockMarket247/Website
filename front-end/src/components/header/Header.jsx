import React from 'react';
import logo from '../../assets/images/logo.png';
import icon6 from '../../assets/images/icons/icon-6.png';

const Header = ({ setMobileMenue, setSearchOpen}) => {
    return (
        <div class="header-lower">
            <div class="outer-container">
                <div class="outer-box">
                    <div class="menu-area">
                        <div class="logo-box">
                            <figure class="logo"><a href="https://jan.coderdemo.com/newwp/bullion/" title="Bullion"><img src={logo} alt="logo" /></a></figure>
                        </div>
                        {/* <!--Mobile Navigation Toggler--> */}
                        <div class="mobile-nav-toggler" onClick={() => setMobileMenue(true)}>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li id="menu-item-60" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-60 dropdown active current"><a title="Home" href="https://jan.coderdemo.com/newwp/bullion/" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Home</a>
                                        <ul role="menu" class="main-dropdown">
                                            <li id="menu-item-63" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item menu-item-63 active"><a title="Home One" href="https://jan.coderdemo.com/newwp/bullion/">Home One</a></li>
                                            <li id="menu-item-62" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"><a title="Home Two" href="https://jan.coderdemo.com/newwp/bullion/home-two/">Home Two</a></li>
                                            <li id="menu-item-61" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"><a title="Home Three" href="https://jan.coderdemo.com/newwp/bullion/home-three/">Home Three</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li id="menu-item-64" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-64 dropdown"><a title="Markets" href="https://jan.coderdemo.com/newwp/bullion/markets/" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Markets</a>
                                        <ul role="menu" class="main-dropdown">
                                            <li id="menu-item-65" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"><a title="Markets" href="https://jan.coderdemo.com/newwp/bullion/markets/">Markets</a></li>
                                            <li id="menu-item-66" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a title="Details Page" href="https://jan.coderdemo.com/newwp/bullion/details-page/">Details Page</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li id="menu-item-67" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-67 dropdown"><a title="Trading" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Trading</a>
                                        <ul role="menu" class="main-dropdown">
                                            <li id="menu-item-68" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"><a title="Platform" href="https://jan.coderdemo.com/newwp/bullion/platform/">Platform</a></li>
                                            <li id="menu-item-69" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"><a title="Our Accounts" href="https://jan.coderdemo.com/newwp/bullion/our-accounts/">Our Accounts</a></li>
                                            <li id="menu-item-860" class="menu-item menu-item-type-post_type menu-item-object-tradings menu-item-860"><a title="Standard Account" href="https://jan.coderdemo.com/newwp/bullion/tradings/standard-a-c/">Standard Account</a></li>
                                            <li id="menu-item-859" class="menu-item menu-item-type-post_type menu-item-object-tradings menu-item-859"><a title="Commission Account" href="https://jan.coderdemo.com/newwp/bullion/tradings/commission-a-c/">Commission Account</a></li>
                                            <li id="menu-item-858" class="menu-item menu-item-type-post_type menu-item-object-tradings menu-item-858"><a title="STP Pro Account" href="https://jan.coderdemo.com/newwp/bullion/tradings/stp-pro-a-c/">STP Pro Account</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li id="menu-item-70" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-70 dropdown"><a title="Education" href="https://jan.coderdemo.com/newwp/bullion/education/" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Education</a>
                                        <ul role="menu" class="main-dropdown">
                                            <li id="menu-item-71" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a title="Education" href="https://jan.coderdemo.com/newwp/bullion/education/">Education</a></li>
                                            <li id="menu-item-1105" class="menu-item menu-item-type-post_type menu-item-object-education menu-item-1105"><a title="Detail Page" href="https://jan.coderdemo.com/newwp/bullion/education/what-is-forex-trading-how-does-it-work/">Detail Page</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li id="menu-item-72" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-72 dropdown"><a title="About" href="https://jan.coderdemo.com/newwp/bullion/company/" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">About</a>
                                        <ul role="menu" class="main-dropdown">
                                            <li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><a title="Company" href="https://jan.coderdemo.com/newwp/bullion/company/">Company</a></li>
                                            <li id="menu-item-79" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"><a title="History" href="https://jan.coderdemo.com/newwp/bullion/history/">History</a></li>
                                            <li id="menu-item-914" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-914 dropdown"><a title="Team" href="#">Team</a>
                                                <ul role="menu" class="main-dropdown">
                                                    <li id="menu-item-74" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a title="Team" href="https://jan.coderdemo.com/newwp/bullion/team/">Team</a></li>
                                                    <li id="menu-item-1078" class="menu-item menu-item-type-post_type menu-item-object-team menu-item-1078"><a title="Team Details" href="https://jan.coderdemo.com/newwp/bullion/team/joy-root/">Team Details</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                            <li id="menu-item-78" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-78 dropdown"><a title="Blog" href="#">Blog</a>
                                                <ul role="menu" class="main-dropdown">
                                                    <li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"><a title="3 Columns" href="https://jan.coderdemo.com/newwp/bullion/3-columns/">3 Columns</a></li>
                                                    <li id="menu-item-81" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"><a title="3 Columns Sidebar" href="https://jan.coderdemo.com/newwp/bullion/3-columns-sidebar/">3 Columns Sidebar</a></li>
                                                    <li id="menu-item-82" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a title="List View 01" href="https://jan.coderdemo.com/newwp/bullion/list-view-01/">List View 01</a></li>
                                                    <li id="menu-item-83" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83"><a title="List View 02" href="https://jan.coderdemo.com/newwp/bullion/list-view-02/">List View 02</a></li>
                                                    <li id="menu-item-255" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-255"><a title="Single Post" href="https://jan.coderdemo.com/newwp/bullion/2023/03/20/best-ftse-250-shares-to-buy-in-february-2023/">Single Post</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                            <li id="menu-item-75" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"><a title="Contact" href="https://jan.coderdemo.com/newwp/bullion/contact/">Contact</a></li>
                                            <li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a title="Faq’s" href="https://jan.coderdemo.com/newwp/bullion/faqs/">Faq’s</a></li>
                                            <li id="menu-item-77" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-77"><a title="404" href="https://jan.coderdemo.com/newwp/bullion/?p=1234abcd">404</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-right-content">
                        <div class="search-box-outer search-toggler" onClick={()=>setSearchOpen(true)}><i class="flaticon-search"></i></div>
                        <div class="clients-box">
                            <div class="icon-box"><img src={icon6} alt="Awesome Image" /></div>
                            <a href="https://jan.coderdemo.com/newwp/bullion/contact/">Client Portal<i class="flaticon-right-down"></i></a>
                        </div>
                        <div class="btn-box"><a href="https://jan.coderdemo.com/newwp/bullion/our-accounts/" class="theme-btn btn-one"><span>Open an A/c</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;