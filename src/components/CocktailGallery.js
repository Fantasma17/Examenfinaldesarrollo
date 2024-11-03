import React from "react";
import { Link } from "react-router-dom"; 
import './CocktailGallery.css'; // Asegúrate de que esta línea esté presente

const CocktailGallery = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((cocktail) => (
        <div className="col-md-4 mb-4" key={cocktail.idDrink}>
          <div className="card h-100 shadow-sm border-0">
            <img
              src={cocktail.strDrinkThumb}
              className="card-img-top"
              alt={cocktail.strDrink}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{cocktail.strDrink}</h5>
              <p className="card-text">Disfruta de una bebida refrescante.</p> {/* Texto adicional */}
              <Link to={`/cocktail/${cocktail.idDrink}`} className="portfolio-button mt-auto">
                Conoce Tu Bebida
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CocktailGallery;
