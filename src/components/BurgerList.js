import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './BurgerList.css';
import BurgerItem from './BurgerItem';

const BurgerList = (props) => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    // Fetch burger data from the API
    axios.get('http://localhost:9191/api/all')
      .then(response => {
        console.log(response.data);
        setBurgers(response.data);
      })
      .catch(error => {
        console.log('Error fetching burgers:', error);
      });
  }, []);
if (props){
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3">
        {burgers.map(burger => (
          <div key={burger.id} className="col mb-4">
           <BurgerItem burger={burger} />
          </div>
        ))}
      </div>
    </div>
  );
  }else{
    return <>Loading...</>
  }
};

export default BurgerList;

