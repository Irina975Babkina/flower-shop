import React from 'react';

import './ShopBlock.css';

import ProductBlock from './ProductBlock';

import ProductCart from './ProductCart';

import EditCart from './EditCart';

class ShopBlock extends React.Component {

  state= {
    selectedProductCode: null,
    products: this.props.products,
    mode: 1,
    i: 6,
    disablingButtons: false,
  };

  productSelected= (code) => {
    this.setState({selectedProductCode: code});
    this.setState({mode: 2});
  }

  deleteProd = (code) => {
    const newProductsArr = this.state.products.filter(product => product.code!= code);
    this.setState({products: newProductsArr});
  }

  editProd = (code) => {
    this.setState({selectedProductCode: code});
    this.setState({mode: 3});  
  }

  createProduct = eo => {
    this.setState({mode: 4}); 
  }

  cansel = () => {
    this.setState({mode: 1, disablingButtons: false});
  }

  save = (prodCode, newValues) => {
    const prodIndex = this.state.products.findIndex(p => p.code === prodCode);
    if (prodIndex == -1){
      console.log("продукта нет")
      return;
    }
    const copyProductsArr = [...this.state.products];
    const prod = this.state.products[prodIndex];
    const newProd = {...prod, ...newValues};
    copyProductsArr[prodIndex] = newProd;
    this.setState({products: copyProductsArr, mode: 1, disablingButtons: false});
  }

  add = (newValues) => {
    const copyProdArr = [...this.state.products];
    let a = 0;
    for (let i = 0; i < copyProdArr.length; i+=1) {
      if  (copyProdArr[i].code >= a){
        a = copyProdArr[i].code + 1;
      }
    }
    console.log(copyProdArr);
    newValues.code = a;
    console.log(newValues.code);
    let newCopyProdArr = [newValues, ...copyProdArr];

    console.log(newCopyProdArr);
    this.setState({products: newCopyProdArr, mode: 1, disablingButtons: false});
  }

  workOnProduct = () => {
    this.setState({disablingButtons: true});
  }

  render() {

    const productsCode=this.state.products.map( v =>
      <ProductBlock key={v.code} name={v.name} img= {v.img} code={v.code} price={v.price}
        cbSelected = {this.productSelected} 
        cbDelete = {this.deleteProd}
        cbEdit = {this.editProd}
        cbWorkOnProduct = {this.workOnProduct}
        selectedProductCode = {this.state.selectedProductCode}
        disablingButtons = {this.state.disablingButtons}/>
    );

    let selectedProduct = this.state.products.find(p => p.code === this.state.selectedProductCode);

    return (
      <div className='ShopBlock'>
        <div className='ShopName'>{this.props.shopName}</div>
        <div className='Products'>{productsCode}</div>
        <input type="button" className='Button' value="New product" disabled = {this.state.disablingButtons} onClick={this.createProduct}/>
        {(this.state.mode === 2) &&
          <ProductCart product = {selectedProduct}/> 
        }
        {(this.state.mode === 3) &&
          <EditCart product = {selectedProduct} mode = {this.state.mode} key = {this.state.selectedProductCode} cbSave = {this.save} cbCansel = {this.cansel} cbWorkOnProduct = {this.workOnProduct}/> 
        }
        {(this.state.mode === 4) &&
          <EditCart product = {{"name":"", "img":"", "price":""}}  mode = {this.state.mode}  cbAdd = {this.add} cbWorkOnProduct = {this.workOnProduct}/> 
        }
      </div>
    );
  }
}

export default ShopBlock;
