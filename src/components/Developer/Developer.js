import React from 'react';
import '../Developer/Developer.css';
const Developer = (props) => {
    // console.log(props)
    const { name, age, country, designation, img, salary } = props.developer;
    return (
        <div className="developer">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Designation: {designation}</h4>
            <h5>Age: {age}</h5>
            <h4>Country: {country}</h4>
            <h4>Salary: ${salary}</h4>
            <button
                onClick={() => props.handleAddToCart(props.developer)}
                className="hirebtn"
            > <i class="fas fa-laptop-code"></i>  Hire Me</button>
        </div>
    );
};

export default Developer;