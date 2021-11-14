import classes from './CartItem.module.css';

const CartItem=props=>{
    const itemPrice=`Rs. ${props.item.price.toFixed(2)}`
    return(
        <li key={props.item.key} className={classes['cart-item']}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <p className={classes.price}>{itemPrice}</p>
                    <p className={classes.quantity}>x {props.item.quantity}</p>
                </div>

            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove} className={classes.button}>-</button>
                <button onClick={props.onAdd} className={classes.button}>+</button>
                
            </div>

        </li>
    )
}

export default CartItem;