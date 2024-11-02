import React from "react";
import { Link } from "react-router-dom"; 

const Characters = ({ characters }) => {
  return (
    <>
      <div className="row">
        {characters.map((cocktail) => (
          <div className="col-md-4" key={cocktail.idDrink}>
            <div className="card mb-4">
              <img
                src={cocktail.strDrinkThumb}
                className="card-img-top"
                alt={cocktail.strDrink}
              />
              <div className="card-body">
                <h5 className="card-title">{cocktail.strDrink}</h5>
                <Link to={`/cocktail/${cocktail.idDrink}`} className="btn btn-primary">
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters; 
