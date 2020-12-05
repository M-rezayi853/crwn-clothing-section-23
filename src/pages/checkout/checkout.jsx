import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

// import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CartContext } from '../../providers/cart/cart.provider';
import './chechout.scss';


// const CheckoutPage = ({cartItems, total}) => {
const CheckoutPage = () => {

    const { cartItems, cartItemsTotalPrice } = useContext(CartContext);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }

            <div className="total">
                <span>TOTAL: ${cartItemsTotalPrice}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 12/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartItemsTotalPrice} />
        </div>
    );
};

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     total: selectCartTotal
// });


// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;