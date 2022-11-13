import React from 'react';
import { Box, Typography } from '@mui/material';
import StandAloneToggleBtns from './common/StandAloneToggleButtons/StandAloneToggleBtns';
import CheckboxBtns from './common/CheckboxBtns/CheckboxBtns';
import { useFilterContext } from '../contexts/filterContext/filterContext';
import PriceSlider from './common/PriceSlider/PriceSlider';

const FilterPanel = () => {
  const {
    cuisinesList,
    categoryList,
    selectedCategories,
    setSelectedCategories,
    selectedCuisines,
    setSelectedCuisines,
    priceRange,
    setPriceRange,
  } = useFilterContext();
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box>
        <Typography variant="h6" sx={{ paddingBlock: '1rem' }}>
          Categories:
        </Typography>
        {/* categories */}
        <StandAloneToggleBtns
          data={categoryList}
          state={selectedCategories}
          setState={setSelectedCategories}
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ paddingBlock: '1rem' }}>
          Cuisines:
        </Typography>
        {/* categories */}
        <CheckboxBtns
          data={cuisinesList}
          state={selectedCuisines}
          setState={setSelectedCuisines}
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ paddingBlock: '1rem' }}>
          Price:
        </Typography>
        <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      </Box>
    </Box>
  );
};

export default FilterPanel;
