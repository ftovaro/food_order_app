import { DUMMY_MEALS } from "./dummy-meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsLists = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsLists}</ul>
    </section>
  );
};

export default AvailableMeals;
