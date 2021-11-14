import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/cart-context';

const MealItem=props=>{
    const price=`Rs. ${props.item.price.toFixed(2)}`;

    const cartContext=useContext(CartContext);

    const addToCart=(quantity)=>{
        cartContext.addItem({
            id:props.item.id,
            name:props.item.name,
            quantity:quantity,
            price:props.item.price,
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <p className={classes.description}>{props.item.description}</p>
                <p className={classes.price}>{price}</p>
                
            </div>
            <div>
                <MealItemForm onAddQuantity={addToCart} id={props.item.id}/>
            </div>
        </li>
    );
}

export default MealItem;