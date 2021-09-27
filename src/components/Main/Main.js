import React,{useState,useEffect} from 'react';
import './Main.css';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Main = () => {
    const[cards,setCards]=useState ([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=> res.json())
        .then(data=>setCards(data));
    },[])
    const handleAddToCart = (card)=>{
       const newCart= [...cart,card];
       setCart(newCart);
    }
    return (
        <div className="main-container">
            <div className="card-container">
                {cards.map(card => <Card 
                card={card}
                handleAddToCart={handleAddToCart}
                ></Card>)
                  }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;