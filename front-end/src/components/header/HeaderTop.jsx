import React from 'react';
import icon1 from '../../assets/images/icons/icon-1.png';
import icon2 from '../../assets/images/icons/icon-2.png';
import icon3 from '../../assets/images/icons/icon-3.png';
import icon4 from '../../assets/images/icons/icon-4.png';

const HeaderTop = () => {
    return (
        <div class="header-top">
            <div class="outer-container">
                <div class="support-box">
                    <div class="icon-box">
                        <img src={icon1} alt="Awesome Image" />
                    </div>
                    <p>
                        <a href="tel:+1222567890">+1-222-56-78-90</a> or Request for a
                        <a href="tel:+1222567890"><span>call back</span></a>
                    </p>
                </div>
                <div class="text">
                    <div class="icon-box">
                        <img src={icon2} alt="Awesome Image" />
                    </div>
                    <p>£20 Discount &amp; Get 24/7 Free Assistance</p>
                </div>
                <div class="right-column">
                    <div class="guide-box">
                        <div class="icon-box">
                            <img src={icon3} alt="Awesome Image" />
                        </div>
                        <p><a href="platform/index.html">Free Trading Guides</a></p>
                    </div>
                    <div class="help-center">
                        <div class="icon-box">
                            <img src={icon4} alt="Awesome Image" />
                        </div>
                        <p><a href="contact/index.html">Help Center</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;