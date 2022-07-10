import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
■他ファイルでコンポーネントとして使用するためにexport宣言が必要
■reactコンポーネントが明示的にわかるので、拡張子は.jsxとすべき
■reactコンポーネントは先頭大文字パスカルケースで始めないとエラーになる
■jsxのHTMLプロパティはキャメルケース
■{}で囲えばjsの記述と判定してくれる
■CSSの指定はまず{}で囲ってjsの記述であることを明記
　→さらに{}でくくってjsのオブジェクトとしてCSSプロパティを記述
　→プロパティは文字列のため''で囲う
■useState()の引数で初期値を設定できる
 */

const App = () => {
  console.log("start");
  const onClickCountUp = () => {
    setNum(() => num + 1);
  };
  const [num, setNum] = useState(0);
  const [showFlg, setShowFlg] = useState(true);

  // オブジェクトとしてスタイルを定義できる
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  const showHide = () => {
    setShowFlg(() => !showFlg);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>こんばんは</p>
      <ColorfulMessage message="ピンク1" color="pink" />
      <ColorfulMessage color="pink">ピンク2</ColorfulMessage>
      <ColorfulMessage message="message" color="green" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={showHide}>表示</button>
      {/* trueであれば表示、falseであれば非表示を&&を使って一行で表現できる */}
      {showFlg && <p>$</p>}
    </>
  );
};

export default App;
