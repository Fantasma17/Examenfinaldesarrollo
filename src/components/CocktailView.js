import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CocktailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (response.data.drinks && response.data.drinks.length > 0) {
          setCocktail(response.data.drinks[0]);
        } else {
          console.error("No cocktail data found");
        }
      } catch (error) {
        console.error("Error fetching cocktail data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCocktail();
  }, [id]);

  if (loading) return <div style={{ color: "#fff" }}>Loading...</div>;
  if (!cocktail) return <div style={{ color: "#fff" }}>No cocktail found.</div>;

  return (
    <div 
      className="container" 
      style={{ 
        background: "#0f0c29", 
        background: "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)", 
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)", 
        color: "#fff", 
        padding: "20px",
        borderRadius: "8px" 
      }}
    >
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          marginBottom: "20px", 
          padding: "10px 15px", 
          borderRadius: "5px", 
          backgroundColor: "#FF6347", 
          color: "#fff", 
          border: "none", 
          fontStyle: "italic" 
        }}
      >
        Menú Inicial
      </button>

      <h1 style={{ color: "#FF6347", fontStyle: "italic" }}>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img-fluid mb-3" style={{ borderRadius: "8px" }} />
      
      <h4 style={{ color: "#fff", fontStyle: "italic" }}>Ingredients:</h4>
      <ul>
        {Object.keys(cocktail)
          .filter((key) => key.includes("strIngredient") && cocktail[key])
          .map((key, index) => {
            const ingredient = cocktail[key];
            const measure = cocktail[`strMeasure${index + 1}`];
            return (
              <li key={`${ingredient}-${index}`} style={{ color: "#fff", fontStyle: "italic" }}>
                {measure ? `${measure} ` : ""}{ingredient}
              </li>
            );
          })}
      </ul>

      <h4 style={{ color: "#fff", fontStyle: "italic" }}>Instructions:</h4>
      <p style={{ color: "#fff", fontStyle: "italic" }}>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailView;


