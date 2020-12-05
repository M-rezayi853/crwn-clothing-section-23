import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

// import { selectCurrentUser } from '../../redux/user/user.selectors';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';
import './header.scss';


// const Header = ({ currentUser, hidden }) => {
const Header = () => {

    const currentUser = useContext(CurrentUserContext);
    const { hidden } = useContext(CartContext);
    

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    : (<Link to="/signin" className="option">SIGN IN</Link>)
                }

                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    );
};

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden
// });


// export default connect(mapStateToProps)(Header);
export default Header;