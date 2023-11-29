import React from 'react';

import './EditCart.css';

class EditCart extends React.Component {

  state= {
    name: this.props.product.name,
    img: this.props.product.img,
    price: this.props.product.price,
    nameErr: "",
    imgErr: "",
    priceErr: "",
    err: false,
  };

  nameChanged = eo => {
    this.setState({name: eo.target.value}, this.valid);
  };

  imgChanged = eo => {
    this.setState({img: eo.target.value}, this.valid);
  };

  priceChanged = eo => {
    this.setState({price: eo.target.value}, this.valid);
  };

  productCansel = () => {
    this.props.cbCansel();
  };

  productSave = () => {
    const newProduct = {name: this.state.name, price: this.state.price, img: this.state.img};
    this.props.cbSave(this.props.product.code, newProduct);
  };

  productAdd = () => {
    const newProduct = {name: this.state.name, code: this.props.product.code, img: this.state.img, price: this.state.price};
    this.props.cbAdd(newProduct);
  }

  valid = () => {
    let nameErr = "";
    let priceErr = "";
    let imgErr = "";

    if (!this.state.name){
      nameErr = "Заполните название!";
    }

    if (!this.state.price){
      priceErr = "Заполните цену!";
    }

    if (!this.state.img){
      imgErr = "Добавьте картинку товара!";
    }

    const err = !!(nameErr || priceErr || imgErr);
    this.setState({nameErr, priceErr, imgErr, err});

    this.props.cbWorkOnProduct();
  }

  render() {
    return (
      <div className='EditCart' >
        {(this.props.mode === 3) &&
          <span className='Maintext'> product number {this.props.product.code} selected</span>
        }
        {(this.props.mode === 4) &&
          <span className='Maintext'> New product</span>
        }
        <div className='Wrapper'>
          <span className='Text'>product name: </span>
          <input className='Input' type = "text" value = {this.state.name} onChange = {this.nameChanged}/>
          <span className='Err'>{this.state.nameErr}</span>
        </div>
        <div className='Wrapper'>
          <span className='Text'>product price: </span>
          <input className='Input' type = "number" value = {this.state.price} onChange = {this.priceChanged}/>
          <span className='Err'>{this.state.priceErr}</span>
        </div>
        <div className='Wrapper'>
          <span className='Text'>product image: </span>
          <input className='Input' type = "text" value = {this.state.img} onChange = {this.imgChanged}/>
          <span className='Err'>{this.state.imgErr}</span>
        </div>
        <input type="button" className='Button' value="Cancel" onClick={this.productCansel}/>
        {(this.props.mode === 3) &&
          <input type="button" className='Button' value="Save" disabled = {this.state.err} onClick={this.productSave}/>
        }
        {(this.props.mode === 4) &&
          <input type="button" className='Button' value="Add" disabled = {this.state.err} onClick={this.productAdd}/>
        }  
      </div>
    );
  }
}

export default EditCart;