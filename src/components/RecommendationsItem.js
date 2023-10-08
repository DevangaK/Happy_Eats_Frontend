import React from 'react';
import { Link} from 'react-router-dom';

const RecommendationsItem = ({ burger }) => {

  if (burger.id==21 || burger.id==22){
  return (
    <div className="card mb-3">
      <Link style={{textDecoration: 'none'}} to={`/burgers/${burger.id}`}>
      <img src={burger.image} className="card-img-top" alt={burger.pname} /></Link>
      <div className="card-body">
      <Link style={{textDecoration: 'none', color:"black"}} to={`/burgers/${burger.id}`}><h5 className="card-title">{burger.pname}</h5></Link>
      <Link style={{textDecoration: 'none', color:"black", padding: '10px'}} to={`/burgers/${burger.id}`}><p className="card-text">Price: {burger.price}</p></Link>
      <Link style={{textDecoration: 'none', color:"black", padding: '5px'}} to={`/burgers/${burger.id}`}><p className="card-text">{burger.description}</p></Link>
      </div>
    </div>
  );
  }
};

export default RecommendationsItem;
