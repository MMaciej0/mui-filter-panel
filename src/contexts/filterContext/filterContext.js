import React, { useContext, useReducer, useState } from 'react';
import reducer from './reducer';
import { categoryList, cuisinesList } from '../../constants/data';

const FilterContext = React.createContext();

const initialState = {};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 4350]);

  console.log(priceRange);
  return (
    <FilterContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedCategories,
        setSelectedCategories,
        categoryList,
        cuisinesList,
        selectedCuisines,
        setSelectedCuisines,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
