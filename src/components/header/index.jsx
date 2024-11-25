import React from 'react';
import StickyHeader from './StickyHeader';
import Header from './Header';
import HeaderTop from './HeaderTop';
import MobileHeader from './MobileHeader';
import SearchPopUp from './SearchPopUp';

const HeaderIndex = ({ setMobileMenue, searchOpen, setSearchOpen }) => {
    return (
        <>
            <SearchPopUp setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
            <header class="main-header">
                <HeaderTop />
                <Header setMobileMenue={setMobileMenue} setSearchOpen={setSearchOpen} />
                <StickyHeader />
            </header>
            <MobileHeader setMobileMenue={setMobileMenue} />
        </>
    );
};

export default HeaderIndex;