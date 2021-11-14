import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from 'react';


const HeaderCartButton=(props)=>{

    const [isBtnAnimated,setbtnAnimated] = useState(false);
    const cartContext=useContext(CartContext);
    const {items} = cartContext;

    const totalItems=items.reduce((curNumber,item)=>{
        return curNumber+item.quantity;
    },0)
    console.log(isBtnAnimated);
    const btnClass=`${classes.button} ${isBtnAnimated?classes.bump:''}`;

    useEffect(()=>{
        if(items.length===0)
            return;
        setbtnAnimated(true);
        const timer = setTimeout(()=>{
            setbtnAnimated(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        }
    },[items])

    return (
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {totalItems}
            </span>
            
        </button>
    );
}
export default HeaderCartButton;