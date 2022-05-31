import React, {useState} from "react";
//import Button from "@material-ui/core/Button";

import { NativeSelect, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";


export default function LanguageMenu({ change, language }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChoice = (e) => {
    change(e);
    handleClose();
  };

  return (
    <div className="LanguageMenu">

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{language === 0 ? "DE" : "EN"}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={setAnchorEl}
          label={language === 0 ? "DE" : "EN"}
          onChange={handleChoice}
        >
          <MenuItem value={0} onClick={handleChoice}>Deutsch</MenuItem>
          <MenuItem value={0} onClick={handleChoice}>English</MenuItem>
          
        </Select>
   {/*      <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'testName',
            id: 'uncontrolled-native',
          }}
          onChange={handleClick}
          anchorEl={anchorEl}
          
          onClose={handleClose}
        >
          <option value={0} onClick={handleChoice}>Deutsch</option>
          <option value={1} onClick={handleChoice}>English</option>
        </NativeSelect> */}
        {/*   <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language === 0 ? "DE" : "EN"}
          label="Age"
          onChange={handleClick}

        >
          <MenuItem value={ 10}>Deutsch</MenuItem>
          <MenuItem value={20}>English</MenuItem>
        </Select> */}
      </FormControl>
    </div>
  );
}
/*  <div className="LanguageMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
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