import api from "../utils/api";
import Card from "../components/card";
import { useEffect, useState } from 'react';

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      api.get('user/cart', config)
      .then(res => {
        setCart(res.data)
      })
    }
  }, [mounted])

  return (
    <>
      <img className='home' src='https://www.meuportoseguro.com.br/wp-content/uploads/2015/08/importancia-planejar-compras_2-700x300.jpg' alt=''/>
      <div className='flex-center row'>
        {cart.map((product) => {
          return (
            <Card
              imgUrl={product.imgUrl}
              alt={product.name}
              name={product.name}
              id={product.id}
              price={product.price}
              description={product.description}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  )
}

export default Cart;