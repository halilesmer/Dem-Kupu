import React, {useState} from "react";

import {  FormControl, InputLabel, Select, MenuItem } from "@mui/material";


export default function LanguageMenu({ change, language, className }) {
  const [anchorEl, setAnchorEl] = useState('');


  const handleChange = (event) => {
    setAnchorEl(event.target.value);
    change(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChoice = (e) => {
    change(e);
    handleClose();
  };

  return (
    <div className={`LanguageMenu ${className}`}>

      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">{language === 0 ? "DE" : "EN"}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={anchorEl === null ? '' : anchorEl }
          label={language === 0 ? "DE" : "EN"}
          onChange={handleChange}

        >
          <MenuItem value={0} onClick={handleChoice}>DE</MenuItem>
          <MenuItem value={1} onClick={handleChoice}>EN</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
