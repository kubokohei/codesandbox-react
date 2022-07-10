import React from "react";

/**
 ■props.childrenでタグ内の文字列を取得できる
 */
const ColorfulMessage = (props) => {
  const { message, color } = props;
  return <p style={{ color: color }}>{message}</p>;
  // return <p style={{ color: color }}>{props.children}</p>;
};

export default ColorfulMessage;
