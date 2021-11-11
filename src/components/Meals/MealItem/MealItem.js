import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem=props=>{
    const price=`Rs. ${props.item.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <p className={classes.description}>{props.item.description}</p>
                <p className={classes.price}>{price}</p>
                
            </div>
            <div>
                <MealItemForm id={props.item.id}/>
            </div>
        </li>
    );
}

export default MealItem;