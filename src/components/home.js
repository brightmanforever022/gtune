import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategoryItem from './product/category';
import ProductCard from './product/productCard';
import { categories, products } from '../constants';
import '../styles/home.scss';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([2]);
  const [selectedProducts, setSelectedProducts] = useState(products);

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
    alert(`you added to cart this product ${productId}`);
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
        <Col lg={3} xs={12}>
          <ul>{categoryList}</ul>
        </Col>
        <Col lg={9} xs={12}>
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
    </Container>
  )
}

export default Home;