import React from 'react';
import { shopifyInit } from '../data/shopify.jsx';

class Shop extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    shopifyInit();
  }

  renderProducts(){
    return this.props.products.map((e,i) => <div key={`product-${i}`} id={e}></div>);
  }


  render(){
    return(
      <div className="products-container">
        <div id='collection-component-424ce9c77e8'></div>
      </div>
    )
  }
}

export default Shop;
