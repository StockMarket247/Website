import React from 'react';
import './style.css';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import GetAppIcon from '@mui/icons-material/GetApp';
import HeadsetIcon from '@mui/icons-material/Headset';

const HeaderTop = () => {
    return (
        <div className='header-top'>

            <div className='item'>
                <PhoneCallbackIcon /> +1-222-56-78-90
            </div>

            <div className='item cursor'>
                <EditNotificationsIcon /> £20 Discount
            </div>

            <div className='item pointer highlight'>
                <GetAppIcon /> Free Trading Guides
            </div>

            <div className='item pointer highlight'>
                <HeadsetIcon /> Help Center
            </div>

        </div>
    );
};

export default HeaderTop;