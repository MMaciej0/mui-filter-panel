import { FormGroup } from '@mui/material';
import React from 'react';
import ToggleButtonForm from '../ToggleButtonForm';

const CheckboxBtns = ({ data, state, setState }) => {
  return (
    <FormGroup row>
      {data.map((item) => {
        return (
          <ToggleButtonForm
            type="checkbox"
            key={item.id}
            {...item}
            state={state}
            setState={setState}
          />
        );
      })}
    </FormGroup>
  );
};

export default CheckboxBtns;
