import {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AllMeals from './components/Meals/AllMeals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart,setShowCart]=useState(false);
  
  function showCartHandler(){
    setShowCart(true);
  }
  function removeCartHandler(){
    setShowCart(false);
  }
  
  return (
    <CartProvider>
      {showCart && <Cart removeCartHandler={removeCartHandler}/>}
      <Header showCartHandler={showCartHandler}/>
      <main>
        <AllMeals/>
      </main>
    </CartProvider> 
  );
}

export default App;
