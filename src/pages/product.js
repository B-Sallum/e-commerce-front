import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const id = useParams().id;

  const [product, setProduct] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    axios.get(`/product/${id}`)
      .then(res => {
        setProduct(res.data);
    });
  }, [mounted]);

  const addToCart = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    axios.patch(`/user/cart/${id}`, '', config);
  }

  return (
    <div className='flex-center col'>
      <div className='product__title'>
        <h3>{product.name} - {product.price}</h3>
      </div>

      <div className='product flex-center'>
        <div className='product__details__left'>
          <img src={product.imgUrl} alt=''/>
        </div>
        <div className='product__details__right'>
          <h2 className='product__details__resume'>{product.description}</h2>
        </div>
      </div>
      <button onClick={addToCart} className='nav__buttons'>
          Add to Cart
      </button>
    </div>
  )
}

export default Product;
