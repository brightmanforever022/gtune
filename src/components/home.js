import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import CategoryItem from './product/category';
import ProductCard from './product/productCard';
import { categories, products } from '../constants';
import '../styles/home.scss';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([2]);
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    if(selectedCategories.length === 0) {
      setSelectedProducts(products);
    } else {
      const filteredProducts = products.filter(product => selectedCategories.includes(product.category));
      setSelectedProducts(filteredProducts);
    }
  }, [selectedCategories]);

  function handleSelectCategory(catId) {
    const isExist = selectedCategories.filter(cat => cat === catId).length > 0;
    if(isExist) {
      const selectedCategoryPos = selectedCategories.indexOf(catId);
      let reducedCategories = [...selectedCategories];
      reducedCategories.splice(selectedCategoryPos, 1);
      setSelectedCategories(reducedCategories);
    } else {
      setSelectedCategories([
        ...selectedCategories,
        catId,
      ])
    }
  }

  function addToCart(productId) {
    setProductId(productId);
  }

  function closeAlert() {
    setProductId('');
  }

  const categoryList = categories.map((cat, index) => 
    <li className='category-item' key={index}>
      <CategoryItem
        category={cat}
        isChecked={selectedCategories.includes(cat.id)}
        selectCategory={handleSelectCategory}
      />
    </li>
  );
  const featuredProductList = selectedProducts.map((product, index) => 
    <div className='product-item' key={index}>
      <ProductCard
        product={product}
        addToCart={addToCart}
      />
    </div>
  );

  const allProductList = products.slice(0, 3).map((product, index) => 
    <div className='product-item' key={index}>
      <ProductCard
        product={product}
        addToCart={addToCart}
      />
    </div>
  );

  return (
    <Container className='home-container' fluid>
      <Row>
        <Col lg={2} xs={12}>
          <ul>{categoryList}</ul>
        </Col>
        <Col lg={10} xs={12}>
          <h2>Featured Cleanses</h2>
          <div className='product-list'>
            {featuredProductList}
          </div>
          <div className='split-line' />
          <h2>All Products</h2>
          <div className='product-list'>
            {allProductList}
          </div>
        </Col>
      </Row>
      <Modal
        show={productId !== ''}
        onHide={() => closeAlert()}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add To Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>you added to cart this product: id is {productId}</p>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Home;