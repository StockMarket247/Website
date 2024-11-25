import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Header
import Header from './components/header/Header';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HeaderTop from './components/header/HeaderTop';
import Footer from './components/footer/Footer';
import HeaderIndex from './components/header';

const PageRoutes = () => {
    const [mobileMenue, setMobileMenue] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <BrowserRouter>
            <div className={`boxed_wrapper ${mobileMenue ? 'mobile-menu-visible' : ''}`}>
                <HeaderIndex setMobileMenue={setMobileMenue} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default PageRoutes;