import React from 'react';

import './ShopBlock.css';

import ProductBlock from './ProductBlock';

class ShopBlock extends React.Component {

  state= {
    selectedProductCode: null,
    products: this.props.products,
  };

  productSelected= (code) => {
    console.log("Выбран товар с кодом " + code);
    this.setState({selectedProductCode: code});
  }

  deleteProd = (code) => {
    console.log("Удаляем товар с кодом " + code);
    const newProductsArr = this.state.products.filter(product => product.code!= code);
    this.setState({products: newProductsArr});
  }

  render() {

    const productsCode=this.state.products.map( v =>
      <ProductBlock key={v.code} text={v.text} img= {v.img} code={v.code} price={v.price}
        cbSelected = {this.productSelected} 
        cbDelete = {this.deleteProd}
        selectedProductCode = {this.state.selectedProductCode}/>
    );

    return (
      <div className='ShopBlock'>
        <div className='ShopName'>{this.props.shopName}</div>
        <div className='Products'>{productsCode}</div>
      </div>
    );
  }
}

export default ShopBlock;
