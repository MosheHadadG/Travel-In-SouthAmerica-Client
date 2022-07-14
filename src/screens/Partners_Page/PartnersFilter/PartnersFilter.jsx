import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SelectBoxAge from '../SelectBoxAge/SelectBoxAge';

function PartnersFilter() {
  return (
    <div className="ui menu">
      <div className="item">
        <div className="ui icon input">
          <SelectBoxAge />
        </div>
      </div>
      <div className="item">
        <FormControlLabel control={<Checkbox color="default" />} label="Only partners with planning" />
      </div>
      <div className=" right item">
        <div className="ui button">Find Partner</div>
      </div>
    </div>
  )
}

export default PartnersFilter