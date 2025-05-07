import React from 'react';
import { Link } from 'react-router';

const Card = ({ id, nama, image, harga }) => {
  return (
    <Link to={`/product/${id}`} className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={image} alt={nama} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nama}</h2>
        <p>{harga}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
