import React from 'react';
import './Checkout.css';
import BillingAddress from './BillingAddress/BillingAddress';
import CartTotal from './CartTotal/CartTotal';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const Checkout = () => {
    return(
        <div className="Checkout">
            <div className='BillingAddress'>
                <BillingAddress/>
            </div>
            <div className='total-payment-method'>
                <CartTotal/>
                <PaymentMethod/>
            </div>
        </div>
    );
}

export default Checkout;B