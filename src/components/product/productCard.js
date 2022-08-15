import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const ProductCard = ({product, addToCart}) => {
  const featureList = product.features.map((feat, index) => 
    <li key={index}>{feat}</li>
  );
  return (
    <>
      <div className='product-container'>
        <img src={product.img_url} alt={product.title} />
        <div className='product-info-container'>
          <a href="#" className='product-title'>{product.title}</a>
          <ul className='feature-list'>{featureList}</ul>          
        </div>
      </div>
      {/* <div className='price-cart'> */}
        <p className='product-price'>${product.price}</p>
        <Button variant="primary" onClick={() => addToCart(product.id)}>Add to Cart</Button>
      {/* </div> */}
    </>
  )
};

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

export default ProductCard;