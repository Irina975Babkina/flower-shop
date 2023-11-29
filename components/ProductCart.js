import React from 'react';

import './ProductCart.css';

class ProductCart extends React.Component {
  render() {
    return (
      <div className='ProductCart' >
        <span className='Maintext'> product code {this.props.product.code} selected</span>
        <span className='Text'>product name: {this.props.product.text}</span>
        <span className='Text'>product price: {this.props.product.price}</span>
      </div>
    );
  }
}

export default ProductCart;
