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
          this.setState({
            iPhone: [...this.state.iPhone, key.category === 'iPhone' && key],
            huaWei: [...this.state.huaWei, key.category === 'HUAWEI' && key],
          });
        });
      });
  }

  UNSAFE_componentWillMount() {
    this.getData();
  }

  showProducts() {
    return (
      <div className="products">
        <ul>
          <h2>iPhone</h2>
          {this.state.iPhone.map((key, index) => {
            if (key !== false) {
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
            }
          })}
          <h2>HUAWEI</h2>
          {this.state.huaWei.map((key, index) => {
            if (key !== false) {
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
            }
          })}
        </ul>
      </div>
    );
  }

  render() {
    return this.showProducts();
  }
}

export default Product;
