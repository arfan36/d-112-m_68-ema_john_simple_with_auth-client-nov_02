import './Cart.css';
import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        // total = total + product.price;
        total += product.price;
        shipping += product.shipping;
    }

    const tax = (total * .1).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;