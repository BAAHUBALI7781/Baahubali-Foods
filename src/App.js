import {Fragment} from 'react';
import Header from './components/Layout/Header';
import AllMeals from './components/Meals/AllMeals';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <AllMeals/>
      </main>
    </Fragment> 
  );
}

export default App;
