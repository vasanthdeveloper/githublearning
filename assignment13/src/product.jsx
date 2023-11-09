import React, { useState } from 'react';

function Product({ name, price, image }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="Product Image" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <p>{price}</p>
            {inCart ? (
              <button className="btn btn-outline-danger" onClick={toggleCart}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark" onClick={toggleCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
