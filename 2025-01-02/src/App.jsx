import { useState } from 'react';
import { products } from './helpers/Products.js';
import Product from './components/product/Product.jsx';
import Cart from './components/cart/Cart.jsx';
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="container">
        {showCart 
          ? 
            <Cart 
              data={cart} 
              setShowCart={setShowCart}
              setCart={setCart}
            />
          :
          <>
            <h1>Produktai</h1> 
            {products.map(value => 
              <Product 
                key={value.id} 
                data={value} 
                setShowCart={setShowCart}
                setCart={setCart}
              />
            )}
          </>
        }
      </div>
    </>
  )
}

export default App
