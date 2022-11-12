import React from 'react';
import { Box } from '@mui/material';
import ToggleButtonForm from '../ToggleButtonForm';

const StandAloneToggleBtns = ({ data, state, setState }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {data.map((item) => (
        <ToggleButtonForm
          type="button"
          key={item.id}
          {...item}
          state={state}
          setState={setState}
        />
      ))}
    </Box>
  );
};

export default StandAloneToggleBtns;
