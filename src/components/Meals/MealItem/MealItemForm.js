import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import {useRef} from 'react';

const MealItemForm=props=>{
    const quantityInputRef=useRef();

    const submitHandler=e=>{
        e.preventDefault();
        const quantity=+quantityInputRef.current.value;
        props.onAddQuantity(quantity);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={quantityInputRef} type="number" defaultValue="1" min="1" max="5" label="Quantity" id={props.id}/>
            <button>+ Add</button>
        </form>
    );
}
export default MealItemForm;