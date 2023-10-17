import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = `9b71b79ba02a46339ab8a0d1450672d6`;
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      Food Details{foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
