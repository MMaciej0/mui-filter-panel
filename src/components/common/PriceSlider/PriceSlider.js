import { Slider } from '@mui/material';
import React from 'react';

const PriceSlider = ({ priceRange, setPriceRange }) => {
  const minDistance = 800;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };
  return (
    <Slider
      value={priceRange}
      onChange={handleChange}
      valueLabelDisplay="on"
      disableSwap
      min={0}
      max={4350}
    />
  );
};

export default PriceSlider;
