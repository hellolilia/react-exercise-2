import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Product from './component/Product';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Product />
      </main>
    );
  }
}

export default App;
