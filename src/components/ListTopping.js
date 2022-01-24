import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
export default function ListTopping(props) {
  return (
    <>
      <SnackbarContent message={props.topping} />
    </>
  );
}
