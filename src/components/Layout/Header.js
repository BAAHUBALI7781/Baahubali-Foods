import {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>Baahubali-Foods</h2>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="No preview"></img>
            </div>
        </Fragment>
    );
}

export default Header;