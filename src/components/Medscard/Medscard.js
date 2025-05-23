import React from 'react';
import CardData from '../../config/Medscard';
import { Link } from 'react-router-dom';
import '../Persnolcare/persnolcare.css';
import QuantityButton from '../BuynowButton/Buynow';

function MedsCard() {
  return (
    <>
    <div className="App-person">
      {CardData.map((card) => {
        return (
        
            <div className="card-body">
                  <Link to={`/card/${card.id}`} key={card.id} className="card-link">
              <div className="card-body-div1">
                <img src={card.image} alt={card.title} className='fruit-card-img' />
              </div>
              
          
              <div className="card-body-div2">
                <h3 >{card.title}</h3>
                <p > {card.price}</p>
                <del> {card.oldPrice}</del>
              </div>
          </Link>
          <span className="buynow-btn"><QuantityButton id={card.id} name={card.title} /></span>


           </div>
         
        );
      })} 

    </div>
   

    </>
  );
}

export default MedsCard;
