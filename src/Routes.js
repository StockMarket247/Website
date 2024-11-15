import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Header
import Header from './components/header/Header';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HeaderTop from './components/header/HeaderTop';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <HeaderTop />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;