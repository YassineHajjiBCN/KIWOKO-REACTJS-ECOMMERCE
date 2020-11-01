import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import PersonIcon from '@material-ui/icons/Person';
import RoomIcon from '@material-ui/icons/Room';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.kiwoko.com/on/demandware.static/Sites-KiwokoES-Site/-/default/dwfaf69df9/images/logo-kiwoko.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <Link to="/checkoutplacet">
          <div className="header__optionBasket">
            <RoomIcon />
            <span className="header__optionLineOne">
               ubicacion
            </span>
            <span className="header__optionLineTwo">
             &   ubicacion
            </span>
          </div>
        </Link>

      <div className="header__nav">
        <PersonIcon />
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">{!user ? '' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
