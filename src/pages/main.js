import api from '../utils/api';
import { useState, useEffect } from 'react';
import Card from '../components/card';

const Main = () => {

  const [trigger, setTrigger] = useState(false);
  const [List, setList] = useState([]);

  async function getProducts() {
    return await api.get('/product/all')
  }

  useEffect(() => {
    if (!trigger) {
      getProducts()
      .then((response) => {        
        setList(response.data)
        setTrigger(true)
      })
    }
  }, [trigger]);

  return (
    <>
      <img className='home' src='https://mla-s2-p.mlstatic.com/D_NQ_NP_713180-MLA47290360083_082021-OO.jpg' alt=''/>
      <div className='flex-center row'>
        {List.map((product) => {
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

export default Main;
