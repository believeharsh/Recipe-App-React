import React, { useContext } from "react";
import { GlobelContext } from "../Context/GobalContext/GlobelContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { searchInput, setSearchInput, handleSearch } =
    useContext(GlobelContext);
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
        <NavLink to={"/"}> Your Recipe</NavLink>
       </h1>

        {/* Search Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search recipes..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          <NavLink to={"/"}>Home</NavLink>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          <NavLink to={"/favorites"}>Favourites</NavLink>
          </button>
          {/* <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          <NavLink to={"/favorites"}>Details</NavLink>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
