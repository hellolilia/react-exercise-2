import React, { Component } from 'react';
import productImage from '../assets/product_image_placeholder.png';
import '../styles/Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhone: [],
      huaWei: [],
    };
  }

  getData() {
    fetch('http://localhost:3000/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((key) => {
          if (key.category === 'iPhone') {
            this.setState({
              iPhone: [...this.state.iPhone, key],
            });
          } else {
            this.setState({
              huaWei: [...this.state.huaWei, key],
            });
          }
        });
      });
  }

  UNSAFE_componentWillMount() {
    this.getData();
  }

  getProductCategory(product) {
    let products = product.map((key) => {
      return key.category;
    });
    return products[0];
  }

  showProducts(product) {
    return (
      <div>
        <h2>{this.getProductCategory(product)}</h2>
        <ul>
          {product.map((key, index) => {
            return (
              <li key={index}>
                <h3>{key.name}</h3>
                <img
                  className="productImage"
                  src={productImage}
                  alt="productImage"
                />
                <p>{key.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="products">
        {this.showProducts(this.state.iPhone)}
        {this.showProducts(this.state.huaWei)}
      </div>
    );
  }
}

export default Product;
