import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import '../Marketplace/Marketplace.css'
const Marketplace = () => {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])
    return (
        <div className="marketplace-container">
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                        key={developer.img}
                        developer={developer}
                    ></Developer>)
                }
            </div>
            <div className="cart-container">
                <h2>Hired summary:</h2>
                <h3>Hired Developers:</h3>
            </div>
        </div>
    );
};

export default Marketplace;