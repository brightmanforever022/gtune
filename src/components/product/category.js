import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const CategoryItem = ({category, isChecked, selectCategory}) => {
  return (
    <>
      <Form.Check
        type="checkbox"
        checked={isChecked}
        onChange={() => selectCategory(category.id)}
        label={category.title}
      />
    </>
  )
};

CategoryItem.propTypes = {
  category: PropTypes.object,
  isChecked: PropTypes.bool,
  selectCategory: PropTypes.func,
};

export default CategoryItem;