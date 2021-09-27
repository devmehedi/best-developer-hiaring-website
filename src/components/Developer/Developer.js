import React from 'react';
import '../Developer/Developer.css';
const Developer = (props) => {
    // console.log(props)
    const { name, age, country, designation, img, salary } = props.developer;
    return (
        <div className="developer">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>Designation: {designation}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Salary: {salary}</h4>
            <button
                onClick={() => props.handleAddToCart(props.developer)}
                className="hirebtn"
            >Hire Me</button>
        </div>
    );
};

export default Developer;