import { useState } from 'react';
import Autocomplete from './components/autocomplete/Autocomplete'
import TicTacToe from './components/tic-tac-toe/TicTacToe'
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false);
  const [krepselis, setKrepselis] = useState([]);
  return (
    <>
      {/* <Autocomplete />
      <TicTacToe /> */}
      <div>{krepselis}</div>
      {!showCart ?
        <Products 
          setKrepselis={setKrepselis} 
          krepselis={krepselis}
          setShowCart={setShowCart} 
        />
        :
        <Cart 
        setShowCart={setShowCart} 
        />
      }
    </>
  )
}

export default App
