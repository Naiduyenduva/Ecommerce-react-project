// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;




// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 50 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;





/* src/App.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
  }
  
  h2 {
    color: #333;
  }
  
  button {
    margin-left: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }

  

  Step 5: Testing the Application
Run your application using npm start and open it in your browser. You should see a list of products with "Add to Cart" buttons and a cart section. Adding and removing products should update the cart state accordingly.

Summary
You've now created a simple "Add to Cart" functionality using React. This includes:

Setting up a basic React project.
Creating components for product listing and cart display.
Managing state in a parent component.
Adding basic styling to the components.
For more complex scenarios, you might want to consider state management libraries like Redux or context API for better state handling and scalability.