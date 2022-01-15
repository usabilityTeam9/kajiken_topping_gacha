import React, { useState } from "react";
export default function ButtonLogic() {
  const [count, setCount] = useState(0);
  const [possession_money, setPossession_money] = useState(500);
  const [toppinglist20, setTopping20] = useState(["マヨネーズ", "魚粉"]);
  const [toppinglist50, setTopping50] = useState([
    "青ネギ",
    "キャベツ",
    "もやし",
    "白ネギ",
    "ノリ",
    "梅干し",
  ]);
  const [toppinglist100, setTopping100] = useState([
    "明太子",
    "半熟卵",
    "メンマ",
    "キムチ",
    "チーズ",
    "トマト",
    "カレー",
  ]);
  const [toppinglist250, setTopping250] = useState(["チャーシュー"]);
  function Randompick() {
    const toppings = [
      toppinglist20,
      toppinglist50,
      toppinglist100,
      toppinglist250,
    ];
    const topping_num = Math.floor(Math.random() * toppings.length);
    const topping_num2 = Math.floor(
      Math.random() * toppings[topping_num].length
    );
    const topping = toppings[topping_num][topping_num2];
    return topping;
  }
  function handleClick() {
    while (possession_money >= 20) {
      setCount(count + 1);
      setPossession_money(possession_money - 20);
      setTopping20([...toppinglist20, "青ネギ"]);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked");
          setCount(count + 1);
          console.log(count);
        }}
      >
        Click me
      </button>
      <p>{toppinglist20}</p>
      <p>{toppinglist50}</p>
      <p>{toppinglist100}</p>
      <p>{toppinglist250}</p>
    </div>
  );
}
