import * as React from "react";
import ButtonLogic_css from "./ButtonLogic.css";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
export default function ListTopping(props) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <SnackbarContent message={props.topping} />
      </Stack>
    </>
  );
}
