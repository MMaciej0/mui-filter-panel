import { Checkbox, FormControlLabel, ToggleButton } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ToggleButtonForm = ({ type, state, setState, value, id, label }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      setState([...state, value]);
    } else {
      setState(state.filter((option) => option !== value));
    }
  }, [selected]);

  if (type === 'checkbox')
    return (
      <FormControlLabel
        key={id}
        value={value}
        control={<Checkbox />}
        label={label}
        onChange={() => setSelected(!selected)}
      />
    );

  if (type === 'button')
    return (
      <ToggleButton
        value={value}
        selected={selected}
        onChange={() => setSelected(!selected)}
        sx={{
          padding: '1rem 0.5rem',
        }}
      >
        {label}
      </ToggleButton>
    );
};

export default ToggleButtonForm;
