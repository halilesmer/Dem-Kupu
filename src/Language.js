import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function LanguageMenu({ change, language }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    </div>
  );
}
