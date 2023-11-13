import React from 'react';

import './ProductBlock.css';

class ProductBlock extends React.Component {

  productClicked = eo => {
    this.props.cbSelected(this.props.code);
  }

  productDelete = eo => {
    eo.stopPropagation();
    this.props.cbDelete(this.props.code);
  }

  render() {

    const isSelected = this.props.selectedProductCode===this.props.code;

    return (
      <div className='ProductBlock' onClick={this.productClicked} style={{backgroundColor:isSelected?"rgb(246, 246, 147)":"#d7f8c9"}}>
        <span className='Image'><img src ={this.props.img} /></span>
        <span className='Text'>{this.props.text}</span>
        <span className='Price'>{this.props.price}</span>
        <input type="button" className='Button' value="Delete" onClick={this.productDelete}/>
      </div>
    );
  }
}

export default ProductBlock;
