import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function appBar(label) {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      ></IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

function Header() {
  return (
    <>
      <Stack spacing={1} sx={{ flexGrow: 1 }}>
        <AppBar position="relative" color="primary">
          {appBar("Kajiken_topping_gacha")}
        </AppBar>
        <Button></Button>
      </Stack>
    </>
  );
}

export default Header;
