"use client";
import styles from "./page.module.css";
import data from "../utils/languaje.json";
import Link from "next/link";
import usaFlag from "../assets/usa_flag.jpg";
import spainFlag from "../assets/spain_flag.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLangEnglish, setLangSpanish } from "@/redux/features/configSlice";

export default function Home() {
  const lang= useAppSelector((state) => state.configReducer.lang)
  const dispatch = useAppDispatch()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data[lang][0]}</h1>
      <div className={styles.langContainer}>
        <button
          className={styles.btnImage}
          onClick={() => dispatch(setLangEnglish())}
        >
          <img src={usaFlag.src} alt="english" />
        </button>
        <button
          className={styles.btnImage}
          onClick={() => dispatch(setLangSpanish())}
        >
          <img src={spainFlag.src} alt="spanish" />
        </button>
      </div>
      <div className={styles.btnContainer}>
        <Link className={styles.buttonLink} href={"/home"}>
          {data[lang][1]}
        </Link>
        <Link className={styles.buttonLink} href={"/guide"}>
          {data[lang][2]}
        </Link>
      </div>
    </main>
  );
}
