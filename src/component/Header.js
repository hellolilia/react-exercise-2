import React, { Component } from 'react';
import cartImage from '../assets/cart_image.png';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="storeTitle">
        <h1>Store</h1>
        <img className="cartImage" src={cartImage} alt="cartImage" />
      </div>
    );
  }
}

export default Header;
