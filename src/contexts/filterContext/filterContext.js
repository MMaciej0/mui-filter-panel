import React, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
import {
  categoryList,
  cuisinesList,
  dataList as dataListFromDB,
} from '../../constants/data';
import { filterByProp } from '../../utils/filtering';

const FilterContext = React.createContext();

const initialState = {};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 4350]);
  const [dataList, setDataList] = useState(dataListFromDB);

  useEffect(() => {
    let output = dataListFromDB;
    if (selectedCategories.length > 0) {
      output = filterByProp(output, selectedCategories, 'category');
    }
    if (selectedCuisines.length > 0) {
      output = filterByProp(output, selectedCuisines, 'cuisine');
    }
    // price range
    const minPrice = priceRange[0];
    const maxPrice = priceRange[1];
    output = output.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setDataList(output);
  }, [selectedCategories, selectedCuisines, priceRange]);

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
        dataList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
