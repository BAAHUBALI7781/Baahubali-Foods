import classes from './Header.module.css';
const Header=(props)=>{
    return (
        <div>
            <div className={classes.header}>
                <h2>Baahubali-Foods</h2>
            </div>
            <div className={classes['main-image']}>
                <img src="./meals.jpg" alt="No preview"></img>
            </div>
        </div>
    );
}

export default Header;