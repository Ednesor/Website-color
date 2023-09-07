"use client";
import React from "react";
import data from "../../utils/languaje.json";
import { useAppSelector } from "@/redux/hooks";
import style from "./guide.module.css";
import Link from "next/link";

export default function page() {
  const lang = useAppSelector((state) => state.configReducer.lang);

  return (
    <main className={style.main}>
      <Link className={style.button} href={"/home"}>
        {data[lang][1]}
      </Link>
      <h1>{data[lang][3]}</h1>
      <p>{data[lang][4]}</p>

      <h4>{data[lang][5]}</h4>
      <p>{data[lang][6]}</p>
      <p>{data[lang][7]}</p>
      <h3>{data[lang][8]}</h3>
      
      <ul>
        <li>
          <h4>{data[lang][9]}</h4>
          <ul>
            <li>{data[lang][10]}</li>
          </ul>
        </li>
        <li>
          <h4>{data[lang][11]}</h4>
          <ul>
            <li>{data[lang][12]}</li>
          </ul>
        </li>
        <li>
          <h4>{data[lang][13]}</h4>
          <ul>
            <li>{data[lang][14]}</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
