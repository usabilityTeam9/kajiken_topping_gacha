import React, { useState } from "react";
export default function ButtonLogic() {
  const [count, setCount] = useState(-1);
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

  // toppinglist20, toppinglist50, toppinglist100, toppinglist250からLevel別で選ぶ
  function Randompick(level) {
    if (level === 3) {
      setPossession_money(possession_money - 250);
      return toppinglist250[Math.floor(Math.random() * toppinglist250.length)];
    } else if (level === 2) {
      setPossession_money(possession_money - 100);
      return toppinglist100[Math.floor(Math.random() * toppinglist100.length)];
    } else if (level === 1) {
      setPossession_money(possession_money - 50);
      return toppinglist50[Math.floor(Math.random() * toppinglist50.length)];
    } else if (level === 0) {
      setPossession_money(possession_money - 20);
      return toppinglist20[Math.floor(Math.random() * toppinglist20.length)];
    }
  }
  /*
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

    let index = Math.floor(Math.random() * toppings.length);

    if (index === 0) {
      setPossession_money(possession_money - 20);
    } else if (index === 1) {
      setPossession_money(possession_money - 50);
    } else if (index === 2) {
      setPossession_money(possession_money - 100);
    } else if (index === 3) {
      setPossession_money(possession_money - 250);
    }
    console.log(possession_money);
    return Listpick(toppings[index]);
  }
  function Listpick(list) {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
  }
  */

  //ボタンを押した時の処理
  function handleClick() {
    //possesion_moneyが0以上
    while (possession_money > 0) {
      setPossession_money(possession_money - 20);
      /*
      if (possession_money >= 250) {
        setPossession_stock(possession_stock.concat(Randompick(3)));
        setPossession_money(possession_money - 20);
      } else if (possession_money >= 100) {
        setPossession_stock(possession_stock.concat(Randompick(2)));
        setPossession_money(possession_money - 20);
      } else if (possession_money >= 50) {
        setPossession_stock(possession_stock.concat(Randompick(1)));
        setPossession_money(possession_money - 20);
      } else if (possession_money >= 20) {
        setPossession_stock(possession_stock.concat(Randompick(0)));
        setPossession_money(possession_money - 20);
      } else {
        break;
      }*/
      console.log(possession_stock);
      console.log(possession_money);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
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
