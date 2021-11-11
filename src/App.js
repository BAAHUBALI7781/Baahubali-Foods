import {Fragment, useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AllMeals from './components/Meals/AllMeals';


function App() {
  const [showCart,setShowCart]=useState(false);
  
  function showCartHandler(){
    setShowCart(true);
  }
  function removeCartHandler(){
    setShowCart(false);
  }
  
  return (
    <Fragment>
      {showCart && <Cart removeCartHandler={removeCartHandler}/>}
      <Header showCartHandler={showCartHandler}/>
      <main>
        <AllMeals/>
      </main>
    </Fragment> 
  );
}

export default App;
