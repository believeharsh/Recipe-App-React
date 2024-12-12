import React, { useContext } from "react";
import { GlobelContext } from "../Context/GobalContext/GlobelContext";
import RecipeItem from "../components/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobelContext);
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Loader or Message */}
      {loading && (
        <p className="text-center text-lg text-blue-500 font-medium">
          Data is being loaded! Please wait...
        </p>
      )}
  
      {/* Recipes Section */}
      <div className="container mx-auto">
        {recipeList && recipeList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipeList.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-lg text-gray-500 font-medium">
              Nothing to show! Try searching for a recipe.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
