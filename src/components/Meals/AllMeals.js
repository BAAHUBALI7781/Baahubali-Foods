import {Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';


const AllMeals=props=>{
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default AllMeals;