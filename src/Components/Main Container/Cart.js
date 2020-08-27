import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    function messageAlert(){
        if (total == 0 ) {
            alert("You don't purchase any course");
        } else {
            alert("Currently we are off, Please try next batch");
        }
    }

    
    return (
        
        <div className="cart-area">
            <h3>Order Summery</h3>
            <h6>Items Ordered : {cart.length}</h6>
            <h6>Total Price : {total}$</h6>
            <button className="btn btn-success" onClick={messageAlert}>Place Order</button>
        </div>
    );
};

export default Cart;