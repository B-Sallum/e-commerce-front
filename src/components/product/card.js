import React from "react";
import { Link } from "react-router-dom";
import './product.css'

const Card = (props) => {  
  return (
    <Link to={`/product/${props.id}`}>
      <div className='product__card'>
        <h3 className='product__title'>{props.name}</h3>
        <img src={props.imgUrl} alt={props.alt} />
        <h2>{props.price}</h2>
        <h4>{props.description}</h4>
      </div>
    </Link>
  )
}
export default Card;