import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }


    return (
        <div className='cart'>
            <h2>Hired summary</h2>
            <h3>Hired Developers: {props.cart.length}</h3>
            <h4>Total: ${total}</h4>
            {props.cart.map(user => <h4>Hired ✔ {user.name} </h4>)}
        </div>
    );
};

export default Cart;