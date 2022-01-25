import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ListTopping(props) {
  const ToppingImage = {
    チャーシュー:
      "https://1.bp.blogspot.com/-spf6UD-ihPc/XDXbjUMsxwI/AAAAAAABRBc/VWxkUAu6FQUqZFWEfuU8AGDAY9BWTGsJgCLcBGAs/s200/food_ramen_topping5_cha-syu.png",
    マヨネーズ:
      "https://2.bp.blogspot.com/-zDEHlIHN0uc/WGnPWLPeXzI/AAAAAAABA4g/vpyuzp3hLJkaHYMQKs1OkmJiG5tghqw2wCLcB/s150/hamburger_goods_source_goods_mayo.png",
    魚粉: "https://1.bp.blogspot.com/-g0tbS-Rf0pk/X3hF_S_ScZI/AAAAAAABbmQ/u0Pd0qVobbYOfFYhmls3iBXzIUiuta2-gCNcBGAsYHQ/s400/food_sobagaki.png",
    青ネギ:
      "https://2.bp.blogspot.com/-UVV5Vpeqdt8/XDXbig3K2TI/AAAAAAABRBA/-kiDeOU4hc0KgMrNdpr5BcuGu7jfUsaWgCLcBGAs/s200/food_ramen_topping2_negi.png",
    キャベツ:
      "https://1.bp.blogspot.com/-volvXAaeKjk/WG9PCVR520I/AAAAAAABA-U/EsSNrrMeIrIdRnPL9uKecjc1rSjChe__gCLcB/s300/hamburger_goods_cabbage.png",
    もやし:
      "https://3.bp.blogspot.com/-aBnWWeqayek/XDXblsF9pfI/AAAAAAABRBw/lIugm-buph8SBt-7UDxVjkpbDo-Zylu1ACLcBGAs/s200/food_ramen_topping7_moyashi.png",
    白ネギ:
      "https://1.bp.blogspot.com/-U9yh6cd1xbw/XDXbi4r3lQI/AAAAAAABRBM/SLSxc0icKt8_HVl4qk2Cg9aTAhl_hXR8QCLcBGAs/s200/food_ramen_topping3_shiraga_negi.png",
    ノリ: "https://2.bp.blogspot.com/-la0vFoPTtxA/XDXbi72glqI/AAAAAAABRBU/DJUOlL3XwuUJm4O6tWDmg5a-NrXZRwQjQCLcBGAs/s200/food_ramen_topping4_nori.png",
    梅干し:
      "https://3.bp.blogspot.com/-AXuTbH14SdA/UdEeQY_yc1I/AAAAAAAAVrI/xCiAtlJHh8A/s400/food_umeboshi.png",
    明太子:
      "https://1.bp.blogspot.com/-2b6KSL2DinQ/UchCA2S8Y4I/AAAAAAAAVIE/iLicJN8x0Qg/s400/food_mentaiko.png",
    半熟卵:
      "https://3.bp.blogspot.com/-z7YF-2FIeNw/W5H_4njUnLI/AAAAAAABOwY/GNMRxirbnlI7bbTGa_ly77pWQ5lmP7mVQCLcBGAs/s400/hayakuchi_namamugi_kome_tamago.png",
    メンマ:
      "https://2.bp.blogspot.com/-4MdTUB40Mhc/XDXbmH6fwBI/AAAAAAABRB0/9Kx0Toa42z0ul_HJSiI-tMp6PFvPQBeeQCLcBGAs/s200/food_ramen_topping8_menma.png",
    キムチ:
      "https://1.bp.blogspot.com/-ss_pbo3ovUY/VCka72oQx9I/AAAAAAAAm-I/Jsz5t-52JCc/s400/food_kimuchi.png",

    チーズ:
      "https://1.bp.blogspot.com/-77UCBCxWtbQ/XexqVRQ-zvI/AAAAAAABWfA/1XhQCGChab8HOhkc4RtrqM0RTXhOKEmOACNcBGAsYHQ/s300/food_cheese_yellow1.png",
    トマト:
      "https://3.bp.blogspot.com/-RU3nAlu5CE0/VGX8l_2ga8I/AAAAAAAApJU/YmTYsIS5WYo/s400/mini_petit_tomato.png",
    カレー:
      "https://2.bp.blogspot.com/-0hi1ff3v8mY/VEETTN0rVWI/AAAAAAAAoc0/2_Z6lZs8Upk/s400/curry_ko.png",
  };
  return (
    <>
      <Card sx={({ display: "flex" }, { minWidth: 275 })}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img src={ToppingImage[props.topping]} alt="cha" />
          <CardContent sx={{ flex: "1 0 auto" }}>{props.topping}</CardContent>
        </Box>
      </Card>
    </>
  );
}
