import React, { useState } from "react";
export default function ButtonLogic() {
  const [count, setCount] = useState(0);
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
