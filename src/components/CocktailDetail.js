import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CocktailDetail = () => {
  const { id } = useParams(); // Get cocktail ID from URL
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15300`);
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCocktail();
  }, [id]);

  if (!cocktail) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img-fluid mb-3" />
      <h4>Ingredients:</h4>
      <ul>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => {
          const ingredient = cocktail[`strIngredient${num}`];
          const measure = cocktail[`strMeasure${num}`];
          return ingredient ? <li key={num}>{measure} {ingredient}</li> : null;
        })}
      </ul>
      <h4>Instructions:</h4>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetail;
