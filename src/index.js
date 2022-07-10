import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/**
■index.jsの中にconst Appを定義してそれをレンダリングしてる
　→javaで１ソースファイルに2クラス書いてるイメージ
　→こんなことできるんだね、素人にはこっちのがわかりやすい

■returnの内容が複数になる場合は()にはさむ必要がある
■JSX記法returnするDOM要素はひとつのタグに囲われていなければならない
　→React.fragment or <></>（不要なレンダリングが減らせる）
*/

// const App = () => {
//   return (
//     <>
//       <h1>こんにちは</h1>
//       <p>こんばんは</p>
//     </>
//   );
// };

// render(renderするものの指定,どこにrenderするか)
// renderもメソッドだもんね、メソッドの引数にHTML（みたいなの）を書いてる
ReactDom.render(<App />, document.getElementById("root"));
