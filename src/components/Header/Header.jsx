import React from 'react';
import logo from './logo.svg'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'navbar'}>
                    <div className={'logo-item'}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={'nav-items-block'}>
                        <button className={'nav-item'}>Home</button>
                        <button className={'nav-item'}>About</button>
                        <button className={'nav-item'}>Tickets</button>
                        <button className={'nav-item nav-item-last'}>Contacts</button>
                    </div>
                    <div className="phone-item">+1 893 839-23-64</div>
                </div>
                <div className="header-content">
                    <div className="header-content-title-1">Not the event. The life</div>
                    <div className="header-content-title-2">Burning man</div>
                    <button className='header-content-btn'>Book the tickets</button>
                </div>
            </div>
        </header>
    );
};

export default Header;