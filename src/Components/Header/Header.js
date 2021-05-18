import React from 'react';
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="" />

            <div className="header__search">
                <input className='header-searchInput' type="text" />
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header-optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;