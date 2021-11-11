
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Haka Noodles',
      description: 'Fresh veggies',
      price: 200.10,
    },
    {
      id: 'm2',
      name: 'Double Burst Pizza',
      description: '4 cheese in 1',
      price: 360,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 310,
    },
    {
      id: 'm4',
      name: 'Green Salad',
      description: 'Healthy...and green...',
      price: 246.80,
    },
  ];
const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map(meal=>{
        return <MealItem item={meal} key={meal.id}/>
    });
    return (
        <section className={classes.meals}>
            <Card>
              <ul>
                  {mealsList}
              </ul>
            </Card>
            
        </section>
    );
}
export default AvailableMeals;