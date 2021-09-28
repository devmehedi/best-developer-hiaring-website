import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import '../Marketplace/Marketplace.css'
const Marketplace = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    const handleAddToCart = (developer) => {
        console.log(developer)
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div className="marketplace-container">
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                        key={developer.img}
                        developer={developer}
                        handleAddToCart={handleAddToCart}
                    ></Developer>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Marketplace;