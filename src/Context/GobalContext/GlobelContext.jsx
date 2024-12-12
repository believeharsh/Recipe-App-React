import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const GlobelContext = createContext();

const GlobelContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsArr, setRecipeDetailsArr] = useState(null) ; 
  const [fevouriteList, setfavouriteList] = useState([]) ; 
//   console.log(recipeList);

  const handleSearch = async (event) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`
      );
      if (!response.ok) {
        throw new Error("Data is not not coming bcs faild fetech request");
      }
      const data = await response.json();
      setRecipeList(data?.data?.recipes);
      setLoading(false);
      setErrorMsg(null);
      setSearchInput("");
      Navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      setSearchInput("");
    }
  };

  const handleAddToFavorite = (getCurrentItem) => {
    // console.log(getCurrentItem) ; 
    const cpyOfFevouriteList = [...fevouriteList] ; 
    const index = cpyOfFevouriteList.findIndex((item) => item.id === getCurrentItem.id) ; 
    if(index == -1){
        cpyOfFevouriteList.push(getCurrentItem)
    } else {
        cpyOfFevouriteList.splice(index) ; 
    }
    setfavouriteList(cpyOfFevouriteList) ; 
  }
//   console.log(fevouriteList);

  return (
    <GlobelContext.Provider
      value={{ searchInput, setSearchInput, handleSearch, recipeList, recipeDetailsArr, setRecipeDetailsArr, fevouriteList, setfavouriteList, handleAddToFavorite }}
    >
      {children}
    </GlobelContext.Provider>
  );
};

export default GlobelContextProvider;
