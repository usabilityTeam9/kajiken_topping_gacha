import React, { useState } from "react";
import ListTopping from "./ListTopping";
import ButtonLogic_css from "./ButtonLogic.css";
import Button from "@mui/material/Button";
export default function ButtonLogic() {
  // 所持金
  const [possession_money, setPossession_money] = useState(0);
  // 選択されたトッピングの種類
  const [possession_stock, setPossession_stock] = useState([]);
  // トッピングリスト
  const toppinglist20 = ["マヨネーズ", "魚粉"];
  const toppinglist50 = [
    "青ネギ",
    "キャベツ",
    "もやし",
    "白ネギ",
    "ノリ",
    "梅干し",
  ];
  const toppinglist100 = [
    "明太子",
    "半熟卵",
    "メンマ",
    "キムチ",
    "チーズ",
    "トマト",
    "カレー",
  ];
  const toppinglist250 = ["チャーシュー"];

  function Listpick(list) {
    // リストを選択した時にランダムに選択される
    return list[Math.floor(Math.random() * list.length)];
  }

  //ボタンを押した時の処理
  function handleClick(user_specified_money) {
    //初期値(金と初期配列)を設定
    let tmp_possession_money = user_specified_money;
    let tmp_possession_stock = [];

    //所持金がある場合に処理を行う
    while (tmp_possession_money > 0) {
      // 配列の位置
      let index = -1;

      // 金額に応じて配列を振り分ける
      if (tmp_possession_money >= 250) {
        // 250円以上の場合は250円のガチャテーブルを使う
        let toppings = [
          toppinglist20,
          toppinglist50,
          toppinglist100,
          toppinglist250,
        ];
        // どの配列を使うかをランダムで決める
        index = Math.floor(Math.random() * toppings.length);
        // 配列からランダムで一つ選び、それを配列に追加する
        tmp_possession_stock.push(Listpick(toppings[index]));
        // 金額を減らす
        if (index === 0) tmp_possession_money -= 20;
        if (index === 1) tmp_possession_money -= 50;
        if (index === 2) tmp_possession_money -= 100;
        if (index === 3) tmp_possession_money -= 250;
      } else if (tmp_possession_money >= 100) {
        let toppings = [toppinglist20, toppinglist50, toppinglist100];
        let index = Math.floor(Math.random() * toppings.length);
        tmp_possession_stock.push(Listpick(toppings[index]));
        if (index === 0) tmp_possession_money -= 20;
        if (index === 1) tmp_possession_money -= 50;
        if (index === 2) tmp_possession_money -= 100;
      } else if (tmp_possession_money >= 50) {
        let toppings = [toppinglist20, toppinglist50];
        let index = Math.floor(Math.random() * toppings.length);
        tmp_possession_stock.push(Listpick(toppings[index]));
        if (index === 0) tmp_possession_money -= 20;
        if (index === 1) tmp_possession_money -= 50;
      } else if (tmp_possession_money >= 20) {
        let toppings = [toppinglist20];
        let index = Math.floor(Math.random() * toppings.length);
        tmp_possession_stock.push(Listpick(toppings[index]));
        if (index === 0) tmp_possession_money -= 20;
      } else {
        break;
      }
    }
    setPossession_money(tmp_possession_money);
    setPossession_stock(tmp_possession_stock);
  }

  return (
    <>
      <div className="button_wrapper">
        <Button
          className="button_wrapper"
          variant="contained"
          onClick={() => {
            handleClick(300);
          }}
        >
          300円でガチャる！
        </Button>
      </div>
      <div className="component_wrapper">
        {possession_stock.map((topping) => (
          <ListTopping topping={topping} />
        ))}
      </div>
    </>
  );
}
