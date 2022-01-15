import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RandomTopping() {
  return (
    <div>
      <Stack direction="column" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
