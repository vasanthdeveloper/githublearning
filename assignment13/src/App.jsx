// import React from 'react';
import React, { useState } from 'react';

import Navbar from './Navbar';
import productData from './productData';
import './App.css';

function Header() {
  return (
    <header className="bg-dark py-5">
      {/* Header content */}
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
        </div>
      </div>
    </header>
  );
}






  

function ProductCard(props) {

  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };
  
    return (
        <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src={props.image} alt="Product Image" />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{props.name}</h5>
                <p>{props.price}</p>
            
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
          
                {/* <a className="btn btn-outline-dark mt-auto" href={props.link}>
                  {props.buttonText}
                </a> */}
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


function ProductList() {
    const productCards = productData.map((product) => (
      <div key={product.id} className="col-md-3 col-sm-6">
        <ProductCard
          name={product.name}
          price={product.price}
          image={product.image}
          link={product.link}
          buttonText={product.buttonText}
        />
      </div>
    ));
  
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {productCards}
          </div>
        </div>
      </section>
    );
    }  





function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
     <ProductList />
   
      <Footer />
    </div>
  );
  }



export default App;

