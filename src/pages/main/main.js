import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../../components/product/card'
import './main.css';

const Main = () => {

  axios.defaults.baseURL = 'http://localhost:3001/';

  const [trigger, setTrigger] = useState(false);
  const [List, setList] = useState([]);

  async function getMovies() {
    return await axios.get('/product/all')
  }

  useEffect(() => {
    if (!trigger) {
      getMovies()
      .then((response) => {        
          setList(response.data)
          setTrigger(true)
      })
    }
  }, [trigger]);

  return (
    <>
    <div className='movies'>
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