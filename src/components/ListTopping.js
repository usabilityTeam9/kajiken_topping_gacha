import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ListTopping(props) {
  return (
    <>
      <Card sx={({ display: "flex" }, { minWidth: 275 })}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://1.bp.blogspot.com/-spf6UD-ihPc/XDXbjUMsxwI/AAAAAAABRBc/VWxkUAu6FQUqZFWEfuU8AGDAY9BWTGsJgCLcBGAs/s200/food_ramen_topping5_cha-syu.png"
            alt="cha"
          />
          <CardContent sx={{ flex: "1 0 auto" }}>{props.topping}</CardContent>
        </Box>
      </Card>
    </>
  );
}
