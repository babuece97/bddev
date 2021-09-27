import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = (props) => {
    //console.log(props);
    const {name,img,salary, location,level,age,Available, email,key} =props.card;
    const cartIcon=<FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt="" height="200" width="100%"/>
            </div>
            <h2> {name}</h2>
            <h5> Developer ID:{key}</h5>
            <h5> Hourly payment($):{salary}</h5>
            <h5> Home town:{location}</h5>
            <h5> Age:{age}</h5>
            <h5> Competency:{level}</h5>
            <h5> Available for work:{Available}</h5>
            <h5>Email:{email}</h5>
            <button  
                onClick={()=>props.handleAddToCart(props.card)}
                className="btn-team">
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Team</button>

        </div>
    );
};

export default Card;