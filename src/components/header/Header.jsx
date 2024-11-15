import React from 'react';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className='header'>

            {/* Logo */}
            <div className='logo'>
                <img height='42px' width='158' src={logo} className="App-logo" alt="logo" />
            </div>

            {/* Pages Refs */}
            <div className='pagerefs'>

                <div className='refitem highlight pointer'>Home <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} /></div>

                <div className='refitem highlight pointer'>Markets <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} /></div>

                <div className='refitem highlight pointer'>Trading <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} /></div>

                <div className='refitem highlight pointer'>Education <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} /></div>

                <div className='refitem highlight pointer'>About <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} /></div>

            </div>

            <div className='search-clicker'>
                <SearchIcon className='pointer' />
                <div class="vertical-hr" />
                <button className='open-ac-button pointer buttonhighlight'>
                    Open an A/c <TransitEnterexitIcon sx={{ transform: 'rotate(-90deg)' }} />
                </button>
            </div>

        </div>
    );
};

export default Header;