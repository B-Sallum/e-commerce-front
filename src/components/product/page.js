import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Product = () => {

  axios.defaults.baseURL = 'http://localhost:3001/';

  const id = useParams().id;

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    return axios.get(`/product/${id}`);
  }

  useEffect(() => {
    getProduct()
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  const addMovie = () => {

  }

  return (
    <div className='flex__center'>

    <div className='movie__title'>
       <button onClick={addMovie} className='nav__buttons'>
        Add to Cart
      </button>
      <h3>{product.name} - {product.price}</h3>
    </div>

    <div className='movies'>
      <div className='movie__details__left'>
        <img src={product.imgUrl} alt=''/>
      </div>
      <div className='movie__details__right'>
        <h2 className='movie__details__resume'>{product.description}</h2>
      </div>
    </div>
  </div>
  )
}

export default Product;
