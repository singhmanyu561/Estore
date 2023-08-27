import React from 'react';
import './Cart.css';
import CartProduct from './CartProduct/CartProduct';
import CartSummary from './CartSummary/CartSummary';

const Cart = () => {
    return(
        <div className="Cart">
            <CartProduct/>
            <CartSummary/>
        </div>
    );
}

export default Cart;