import React from 'react';
import SearchBar from '../../components/SearchBar';
import FilterPanel from '../../components/FilterPanel';
import ProductsList from '../../components/ProductsList';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { FilterProvider } from '../../contexts/filterContext/filterContext';

function Home() {
  return (
    <FilterProvider>
      <Box>
        <SearchBar />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <FilterPanel />
          <ProductsList />
        </Stack>
      </Box>
    </FilterProvider>
  );
}

export default Home;
