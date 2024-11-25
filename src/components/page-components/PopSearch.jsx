import React from 'react';

const PopSearch = () => {
    return (
        <div id="search-popup" class="search-popup">
            <div class="popup-inner">
                <div class="upper-box clearfix">
                    <figure class="logo-box pull-left"><a href="index.html" title="Bullion"><img
                        src="wp-content/uploads/2023/03/logo.png" alt="logo" /></a></figure>
                    <div class="close-search pull-right"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="overlay-layer"></div>
                <div class="auto-container">

                    <div class="search-form">                        

                            <div class="form-group">

                                <fieldset>

                                    <input type="search" class="form-control" name="s" value=""
                                        placeholder="Type your keyword and hit" required/>

                                        <button type="submit"><i class="flaticon-loupe"></i></button>

                                </fieldset>

                            </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default PopSearch;