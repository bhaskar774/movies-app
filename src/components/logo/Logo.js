import React from "react";
import s from "./styles.module.css";

function Logo({ title, subtitle, image }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={image} />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}

export default Logo;
