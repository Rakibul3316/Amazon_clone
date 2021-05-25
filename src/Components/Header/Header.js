import React from 'react';
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Redux/StateProvider';
import { auth } from '../Firebase/FirebaseConfig';

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue()

    const handleSingOut = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input className='header-searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleSingOut} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sing Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>


                <Link to='/checkout'>
                    <div className="header__OptionBasket">
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__busketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;