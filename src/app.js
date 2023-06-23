import { useState } from 'react';
import { Navbar } from './components/navbar';
import { Cart } from "./components/carWidget";
import { ItemListContainer } from "./components/itemListContainer";

function App() {
  const [showCart, setShowCart] = useState(false)

  const openCart = () => setShowCart(true)
  const closeCart = () => setShowCart(false)

  return (
    <>
      <header>
        <Navbar />
        <Cart event={openCart}/>
      </header>
      <main>
        {showCart && (
            <ItemListContainer event={closeCart}/>
        )}
      </main>
    </>
  )
}

export default App;