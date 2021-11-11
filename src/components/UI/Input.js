
import classes from './Input.module.css';

const Input = props=>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} min={props.min} max={props.max} defaultValue={props.defaultValue} type={props.type}/>
        </div>
    );
}
export default Input;