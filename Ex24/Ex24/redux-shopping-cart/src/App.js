// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bài tập Redux - Shopping Cart</h1>
      </header>
      <main className="App-main">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
