import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  }


  return (
    <div>
      <div>
        <h1>ViDu1</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <div>
        <h1>ViDu2</h1>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => {setName(e.target.value);
            console.log(e.target.value)
          }} 
        />
        <p>My name is {name}</p>

        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(parseInt(e.target.value, 10))} 
        />
        <p>My age is {age}</p>
      </div>
      <div>
        <h1>ViDu3</h1>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProducts.length > 0 && (
        <p>Bạn đã chọn các sản phẩm: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}</p>
      )}
    </div>

    </div>
  );
}

export default App;
