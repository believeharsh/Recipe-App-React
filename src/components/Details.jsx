import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobelContext } from "../Context/GobalContext/GlobelContext";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsArr,
    setRecipeDetailsArr,
    handleAddToFavorite,
    fevouriteList,
  } = useContext(GlobelContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsArr(data?.data);
      }
    };

    getRecipeDetails();
  }, []);

//   console.log(recipeDetailsArr);
  return (
    <div>
      {" "}
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsArr?.recipe?.image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeDetailsArr?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {recipeDetailsArr?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavorite(recipeDetailsArr?.recipe)}
              className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            >
              {fevouriteList &&
              fevouriteList.length > 0 &&
              fevouriteList.findIndex(
                (item) => item.id === recipeDetailsArr?.recipe?.id
              ) !== -1
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
          <div>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3">
              {recipeDetailsArr?.recipe?.ingredients.map(
                (ingredient, index) => (
                  <li key={index}>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.description}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
