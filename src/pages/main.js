import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/card';

const Main = () => {

  const [trigger, setTrigger] = useState(false);
  const [List, setList] = useState([]);

  async function getProducts() {
    return await axios.get('/product/all')
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
    <div className='flex-center row'>
      {List.map((product) => {
        return (
          <Card
            imgUrl={product.imgUrl}
            alt={product.name}
            name={product.title}
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
