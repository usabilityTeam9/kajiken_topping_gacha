import React, { useState } from "react";
export default function ButtonLogic() {
  const [count, setCount] = useState(0);
  const [possession_money, setPossession_money] = useState(500);
  const [possession_stock, setPossession_stock] = useState([]);
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
  function Randompick(level) {
    let toppings = [];
    if (level === 3) {
      toppings = [toppinglist20, toppinglist50, toppinglist100, toppinglist250];
    } else if (level === 2) {
      toppings = [toppinglist20, toppinglist50, toppinglist100];
    } else if (level === 1) {
      toppings = [toppinglist20, toppinglist50];
    } else if (level === 0) {
      toppings = [toppinglist20];
    }
    const random = Math.floor(Math.random() * toppings.length);
    return Listpick(toppings[random]);
  }
  function Listpick(list) {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
  }
  function handleClick() {
    console.log("クリックされました");
    let random = Math.floor(Math.random() * 4);
    console.log(random);
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click me
      </button>
      <p>{toppinglist20}</p>
      <p>{toppinglist50}</p>
      <p>{toppinglist100}</p>
      <p>{toppinglist250}</p>
      <p>{possession_money}</p>
      <p>{possession_stock}</p>
    </div>
  );
}
