import React, {useState} from "react";
//import Button from "@material-ui/core/Button";

import { NativeSelect, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";


export default function LanguageMenu({ change, language, className }) {
  const [anchorEl, setAnchorEl] = useState('');
  console.log("anchorEl: ", anchorEl);

  const handleChange = (event) => {
    setAnchorEl(event.target.value);
    change(event);
    handleClose();
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
/*  <div className="LanguageMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleChange}
        style={{ color: "white" }}
      >
        {language === 0 ? "DE" : "EN"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem value={0} onClick={handleChoice}>
          Deutsch
        </MenuItem>
        <MenuItem value={1} onClick={handleChoice}>
          English
        </MenuItem>
      </Menu>
    </div> */