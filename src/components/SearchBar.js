import React from 'react';
import { styled } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useFilterContext } from '../contexts/filterContext/filterContext';

const Search = styled('input')({
  padding: '1rem 1rem',
  width: '100%',
  fontSize: '2rem',
  outline: 'none',
  border: 'none',
});

const SearchBar = () => {
  const { searchValue, setSearchValue } = useFilterContext();
  return (
    <Box
      sx={{
        borderBottom: '1px solid gray',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        paddingBlock: '1rem',
      }}
    >
      <SearchIcon
        fontSize="large"
        sx={{
          marginInline: '3rem 2rem',
        }}
      />
      <Search
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
