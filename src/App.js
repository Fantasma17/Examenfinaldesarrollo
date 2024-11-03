import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/barra";
import Characters from "./components/CocktailGallery";
import CocktailDetail from "./components/CocktailView";

function App() {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink");
      setCocktails(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Characters characters={cocktails} />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
