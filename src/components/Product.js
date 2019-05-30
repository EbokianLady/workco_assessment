import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ price, inventory, title }) => (
  <div className='product'>
    <span>
      <h3 className='title'>{title}</h3>
      <h4 className='price'>${price}</h4>
    </span>
    <h6 className='remaining'>
      {inventory ? `${inventory} REMAINING` : null}
    </h6>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
