import React, { useContext } from "react";
import { GlobelContext } from "../Context/GobalContext/GlobelContext";
import RecipeItem from "../components/RecipeItem";

const Favourites = () => {
  const { fevouriteList } = useContext(GlobelContext);
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Recipes Section */}
      <div className="container mx-auto">
        {fevouriteList && fevouriteList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fevouriteList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 font-medium">
            Nothing is added in the favorites now.
          </p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
