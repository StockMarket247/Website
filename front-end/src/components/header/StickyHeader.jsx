import React from 'react';

const StickyHeader = () => {
    return (
        <div class="sticky-header">
            <div class="outer-container">
                <div class="outer-box">
                    <div class="menu-area">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html" title="Bullion">
                                <img src="/logo.png" alt="logo" /></a>
                            </figure>
                        </div>
                        <nav class="main-menu clearfix">
                            {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                        </nav>
                    </div>
                    <div class="menu-right-content">
                        <div class="search-box-outer search-toggler">
                            <i class="flaticon-search"></i>
                        </div>
                        <div class="clients-box">
                            <div class="icon-box">
                                <img src="/icon-6.png" alt="Awesome Image" />
                            </div>
                            <a href="contact/index.html">
                                Client Portal<i class="flaticon-right-down"></i>
                            </a>
                        </div>
                        <div class="btn-box">
                            <a href="our-accounts/index.html" class="theme-btn btn-one">
                                <span>Open an A/c</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyHeader;