import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ price, inventory, title }) => (
  <div className='product'>
    <span>
      <h3 className='title'>{title}</h3>
      <h3 className='price'>${price}</h3>
    </span>
    <h3 className='remaining'>
      {inventory ? `${inventory} REMAINING` : null}
    </h3>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
