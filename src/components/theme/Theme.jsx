"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Moon from "@/assets/images/Moon";
import Sun from "@/assets/images/Sun";

import styles from "./theme.module.scss";

const Theme = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.moon}>
          <Moon />
        </div>
        <div className={styles.sun}>
          <Sun />
        </div>
        <div
          className={styles.ball}
          style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
        ></div>
    </div>
  );
};

export default Theme;
