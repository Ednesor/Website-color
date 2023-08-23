"use client";
import React, { useState } from "react";
import style from "./home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { BiPaint } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function page() {
  const [openGear, setOpenGear] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("select");

  return (
    <main className={style.main}>
      <section className={style.container}>
        <div className={style.web}>
          <nav className={style.navbar}>
            <h1>Logo</h1>
            <ul className={style.links}>
              <li className={style.linkA}>Welcome</li>
              <li className={style.linkA}>About Us</li>
              <li className={style.linkA}>Contact</li>
              <li className={style.user}>
                <p>GS</p>
                <AiFillCaretDown className={style.dropIcon} />
              </li>
            </ul>
            <GiHamburgerMenu className={style.menuIcon}/>
          </nav>
          <article className={style.art}>
            <div className={style.content}>
              <h1>Lorem, ipsum.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium obcaecati id explicabo natus sunt necessitatibus,
                consectetur ducimus fugit quos quidem quae corporis velit neque
                incidunt maiores nostrum deleniti possimus omnis maxime dolore
                facilis? Aspernatur atque temporibus deserunt! Reprehenderit,
                architecto ipsam?
              </p>
            </div>
            <p className={style.image}>Image</p>
          </article>
          <footer className={style.footer}>
            <h2>Logo</h2>
            <section className={style.footerSect}>
              <h3>Social Media</h3>
              <a href="#">Social Media</a>
              <a href="#">Social Media</a>
              <a href="#">Social Media</a>
            </section>
            <section className={style.footerSect}>
              <h3>Site map</h3>
              <a href="#">About</a>
              <a href="#">welcome</a>
              <a href="#">Get started</a>
            </section>
            <section className={style.footerSect}>
              <h3>Legals</h3>
              <a href="#">Terms</a>
              <a href="#">Conditions</a>
            </section>
            <p className={style.copy}>© 2023 Copyright Ednesor | All Rights Reserved</p>
          </footer>
        </div>
        <div className={style.drag} hidden></div>
      </section>

      <button className={style.gear} onClick={() => setOpenGear(!openGear)}>
        <BsGear
          className={style.gearIcon}
          style={{ transform: openGear ? "rotate(0deg)" : "rotate(-90deg)" }}
        />
      </button>
      <div className={style.tools} style={{ left: openGear ? "5px" : "-100vw" }}>
        <input type="color" name="color1" id="color" />
        <button className={style.selectBtn}>
          <AiOutlineSelect className={style.selectIcon} />
        </button>
        <button className={style.selectBtn}>
          <BiPaint className={style.selectIcon} />
        </button>
        <button className={style.selectBtn}>
          <h1>1</h1>
        </button>
      </div>
    </main>
  );
}
