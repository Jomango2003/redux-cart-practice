import {useSelector, useDispatch} from 'react-redux';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react'
import Modal from './components/Modal';
import { getCartItems } from './features/cart/cartSlice';


function App() {
  const dispatch = useDispatch();
  const {cartItems, isLoading} = useSelector((store)=> store.cart)
  const {isOpen} = useSelector((store) => store.modal)
 

  React.useEffect(()=> {
    dispatch(calculateTotals());
  }, [cartItems]);

  React.useEffect(()=>{
    dispatch(getCartItems());
  }, [])

  const counter = useSelector((state)=>state.counter);

  if(isLoading){
    return( <div className='loading'>
        <h1>loading...</h1>
    </div>)
  }

  
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
