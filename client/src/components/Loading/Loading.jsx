import React from "react";
import loading from "../image/doge.gif";
import s from "./Loading.module.css";

function Loading() {
  return (
    <div className={s.containerpadre}>
      <img
        src={loading}
        alt="loading"
        width={500}
        height={320}
        className={s.container}
      />
    </div>
  );
}

export default Loading;
