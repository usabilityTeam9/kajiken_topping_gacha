import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cha from "../static/food_yakibuta_cha-syu-.png";
export default function ListTopping(props) {
  return (
    <>
      <Card sx={({ display: "flex" }, { minWidth: 275 })}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img src={cha} alt="cha" />
          <CardContent sx={{ flex: "1 0 auto" }}>{props.topping}</CardContent>
        </Box>
      </Card>
    </>
  );
}
