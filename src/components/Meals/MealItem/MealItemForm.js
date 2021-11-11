import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm=props=>{
    return (
        <form className={classes.form}>
            <Input type="number" defaultValue="1" min="1" max="5" label="Amount" id={props.id}/>
            <button>+ Add</button>
        </form>
    );
}
export default MealItemForm;