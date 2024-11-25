import React from 'react';
import logo from '../../assets/images/logo.png';

const SearchPopUp = ({ searchOpen, setSearchOpen }) => {
    return (
        <div id="search-popup" class={`search-popup ${searchOpen ? 'popup-visible' : ''}`}>
            <div class="popup-inner">
                <div class="upper-box clearfix">
                    <figure class="logo-box pull-left">
                        <a href="index.html" title="Bullion">
                            <img src={logo} alt="logo" />
                        </a>
                    </figure>
                    <div class="close-search pull-right">
                        <i class="fa-solid fa-xmark" onClick={() => setSearchOpen(false)}></i>
                    </div>
                </div>
                <div class="overlay-layer"></div>
                <div class="auto-container">

                    <div class="search-form">

                        <form method="post">

                            <div class="form-group">

                                <fieldset>

                                    <input type="search" class="form-control" name="s" value="" placeholder="Type your keyword and hit" required />

                                    <button type="submit">
                                        <i class="flaticon-loupe"></i>
                                    </button>

                                </fieldset>

                            </div>

                        </form>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default SearchPopUp;