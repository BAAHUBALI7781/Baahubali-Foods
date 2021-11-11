import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart=props=>{
    const cartItems=[{id:'c1', name:'Burger',quantity:'3',price:'120'}].map(item=>{
        return <li>{item.name}</li>
    })
    return (
    <Modal onClick={props.removeCartHandler}>
        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>464.90</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.removeCartHandler} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
            
        </div>
    </Modal>
        
            
    );
};

export default Cart;