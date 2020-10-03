import React, { Component } from 'react';
import productImage from '../assets/product_image_placeholder.png';
import '../styles/Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: [],
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
            mytext: [...this.state.mytext, key],
          });
        });
      });
  }

  UNSAFE_componentWillMount() {
    this.getData();
  }

  showProducts() {
    return (
      <div>
        <ul>
          {this.state.mytext.map((key, index) => {
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
    return this.showProducts();
  }
}

export default Product;
