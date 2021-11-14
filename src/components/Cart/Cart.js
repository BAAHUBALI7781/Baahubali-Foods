import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart=props=>{
    
    const cartContext=useContext(CartContext);

    const addItemHandler=(item)=>{
        console.log("Inside cart");
        cartContext.addItem({...item,quantity:1});
    }
    const removeItemHandler=(id)=>{
        cartContext.removeItem(id);
    }
    const cartItems=cartContext.items.map(item=>{
        return <CartItem key={item.id} item={item} onAdd={addItemHandler.bind(null,item)} onRemove={removeItemHandler.bind(null,item.id)}/>
    });
    
    const cartAmount=`Rs. ${cartContext.amount.toFixed(2)}`
    const hasItems=cartContext.items.length>0;


    return (
    <Modal onClick={props.removeCartHandler}>
        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>{cartAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.removeCartHandler} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
            
        </div>
    </Modal>
        
            
    );
};

export default Cart;