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

  console.log(selectedCategories, selectedCuisines);
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
