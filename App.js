import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/ShopBlock';

const shopNameText='flover shop "Magical moments"';

import productsArr from './products.json';

ReactDOM.render(
  <ShopBlock
    shopName={shopNameText}
    products={productsArr}
  />
  , document.getElementById('container') 
);
