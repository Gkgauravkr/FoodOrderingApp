
import {Fragment}  from 'react';

import mealsImage  from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const header = props => {

    return (
        <Fragment>

        <header className={classes.header}>
            <h1>
                React Meals
            </h1>
            <HeaderCartButton showCart ={props.showCart}/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt ="delicious food "></img>
        </div>
      
    </Fragment>


    );
}
    
export default header;

