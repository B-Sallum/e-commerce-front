import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {  
  return (
    <Link to={`/product/${props.id}`}>
      <div className='flex-center col margin1 product__card'>
        <img src={props.imgUrl} alt={props.alt} />
        <h3>{props.name}</h3>
        <h2>{props.price}</h2>
      </div>
    </Link>
  )
}
export default Card;
