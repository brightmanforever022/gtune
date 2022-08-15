import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const ProductCard = ({product, addToCart}) => {
  return (
    <div className='product-container'>
      <img src={product.img_url} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Button variant="primary" onClick={() => addToCart(product.id)}>Add to Cart</Button>
    </div>
  )
};

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

export default ProductCard;