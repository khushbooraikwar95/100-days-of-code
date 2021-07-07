import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes  from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chowmean-Soya',
      description: 'Finest chow and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Veg-hakka-nudles',
      description: 'A Itely specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Govi-Manchurian',
      description: 'Indian Style, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Manchaow-soup',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = ()=>{

    const mealsList = DUMMY_MEALS.map(meal => 
        <MealItem
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);
    return (

        <section className={classes.meals}>
            <Card>
            <ul>
            {mealsList}
            </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;