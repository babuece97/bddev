import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart}=props;
    let total= 0;
    for(const card of cart){
        total=total+card.salary;
    }
    
    return (
        <div className="cart">
                <h2> Developers added:{props.cart.length}</h2>
                <h2> Total cost/hr($): {total}</h2>
                <h2>{cart.map((item)=>(
                    <li> {item.name}</li>
                ))}</h2>
        
        </div>
    );
};

export default Cart;