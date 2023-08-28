"use client";
import React, { useState } from "react";
import style from "./home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { BiPaint } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const colorBTN = "#61FFFF";
const colorNoBTN = "#fff";

interface htmlElement {
  id: string;
  color: string;
  type: "backgroundColor" | "color";
}

export default function page() {
  const [openGear, setOpenGear] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#000000");
  const [mode, setMode] = useState<string>("none");
  const [selection, setSelection] = useState<string>("none");
  const [elements, setElements] = useState<Array<htmlElement>>([]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleChangeMode = (m: string) => {
    setMode(m);
  };

  const handleClicSelect = () => {
    handleChangeMode("select");
  };

  const getIdElement = (
    elementsArray: Array<htmlElement>,
    id: string
  ): number => {
    for (let i = 0; i < elementsArray.length; i++) {
      if (elementsArray[i].id === id) {
        return i;
      }
    }
    return -1;
  };

  const bodyOrText = (s: string): "backgroundColor" | "color" => {
    if (s.substring(5, 9) === "body") {
      return "backgroundColor";
    } else return "color";
  };

  const paintElement = (id: string) => {
    if (getIdElement(elements, id) === -1) {
      setElements([
        ...elements,
        {
          id: id,
          color: color,
          type: bodyOrText(id),
        },
      ]);
    } else {
      elements[getIdElement(elements, id)].color = color;
    }
  };

  const handleClicPaint = () => {
    handleChangeMode("paint");
    if (selection !== "none") {
      paintElement(selection);
    }
  };

  const handleClicGroup = () => {
    handleChangeMode("group");
  };

  const handleClicColor = () => {
    handleChangeMode("color");
  };

  const handleSelectElement = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    s: string
  ) => {
    e.stopPropagation();
    if (mode === "select") {
      setSelection(s);
    }
  };

  return (
    <main className={style.main}>
      <section
        className={style.container}
        onClick={(e) => handleSelectElement(e, "menu_body")}
        style={{
          backgroundColor:
            getIdElement(elements, "menu_body") !== -1
              ? elements[getIdElement(elements, "menu_body")].color
              : "white",
        }}
      >
        <div className={style.web}>
          <nav
            className={style.navbar}
            onClick={(e) => handleSelectElement(e, "nbnv_body")}
            style={{
              backgroundColor:
                getIdElement(elements, "nbnv_body") !== -1
                  ? elements[getIdElement(elements, "nbnv_body")].color
                  : "gray",
            }}
          >
            <h1
              onClick={(e) => handleSelectElement(e, "nbh1_text_1")}
              style={{
                color:
                  getIdElement(elements, "nbh1_text_1") !== -1
                    ? elements[getIdElement(elements, "nbh1_text_1")].color
                    : "black",
              }}
            >
              Logo
            </h1>
            <ul className={style.links}>
              <li
                className={style.linkA}
                onClick={(e) => handleSelectElement(e, "nbli_text_2")}
                style={{
                  color:
                    getIdElement(elements, "nbli_text_2") !== -1
                      ? elements[getIdElement(elements, "nbli_text_2")].color
                      : "black",
                }}
              >
                Welcome
              </li>
              <li
                className={style.linkA}
                onClick={(e) => handleSelectElement(e, "nbli_text_3")}
                style={{
                  color:
                    getIdElement(elements, "nbli_text_3") !== -1
                      ? elements[getIdElement(elements, "nbli_text_3")].color
                      : "black",
                }}
              >
                About Us
              </li>
              <li
                className={style.linkA}
                onClick={(e) => handleSelectElement(e, "nbli_text_4")}
                style={{
                  color:
                    getIdElement(elements, "nbli_text_4") !== -1
                      ? elements[getIdElement(elements, "nbli_text_4")].color
                      : "black",
                }}
              >
                Contact
              </li>
              <li
                className={style.user}
                onClick={(e) => handleSelectElement(e, "nbli_user")}
                style={{
                  color:
                    getIdElement(elements, "nbli_user") !== -1
                      ? elements[getIdElement(elements, "nbli_user")].color
                      : "black",
                  borderColor:
                    getIdElement(elements, "nbli_user") !== -1
                      ? elements[getIdElement(elements, "nbli_user")].color
                      : "black",
                }}
              >
                <p
                  onClick={(e) => handleSelectElement(e, "nbli_user")}
                  style={{
                    color:
                      getIdElement(elements, "nbli_user") !== -1
                        ? elements[getIdElement(elements, "nbli_user")].color
                        : "black",
                  }}
                >
                  GS
                </p>
                <AiFillCaretDown
                  className={style.dropIcon}
                  style={{
                    color:
                      getIdElement(elements, "nbli_user") !== -1
                        ? elements[getIdElement(elements, "nbli_user")].color
                        : "black",
                  }}
                />
              </li>
            </ul>
            <GiHamburgerMenu
              className={style.menuIcon}
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                handleSelectElement(e, "nbli_menu")
              }
              style={{
                color:
                  getIdElement(elements, "nbli_menu") !== -1
                    ? elements[getIdElement(elements, "nbli_menu")].color
                    : "black",
              }}
            />
          </nav>
          <article className={style.art}>
            <div className={style.content}>
              <h1
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "a1h1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "a1h1_text") !== -1
                      ? elements[getIdElement(elements, "a1h1_text")].color
                      : "black",
                }}
              >
                Lorem, ipsum.
              </h1>
              <p
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "a1p1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "a1p1_text") !== -1
                      ? elements[getIdElement(elements, "a1p1_text")].color
                      : "black",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium obcaecati id explicabo natus sunt necessitatibus,
                consectetur ducimus fugit quos quidem quae corporis velit neque
                incidunt maiores nostrum deleniti possimus omnis maxime dolore
                facilis? Aspernatur atque temporibus deserunt! Reprehenderit,
                architecto ipsam?
              </p>
            </div>
            <p
              className={style.image}
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                handleSelectElement(e, "a1i1_body")
              }
              style={{
                backgroundColor:
                  getIdElement(elements, "a1i1_body") !== -1
                    ? elements[getIdElement(elements, "a1i1_body")].color
                    : "gray",
              }}
            >
              Image
            </p>
          </article>
          <footer
            className={style.footer}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleSelectElement(e, "fo00_body")
            }
            style={{
              backgroundColor:
                getIdElement(elements, "fo00_body") !== -1
                  ? elements[getIdElement(elements, "fo00_body")].color
                  : "gray",
            }}
          >
            <h2
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                handleSelectElement(e, "foh2_text")
              }
              style={{
                color:
                  getIdElement(elements, "foh2_text") !== -1
                    ? elements[getIdElement(elements, "foh2_text")].color
                    : "black",
              }}
            >
              Logo
            </h2>
            <section className={style.footerSect}>
              <h3
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foh3_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foh3_text") !== -1
                      ? elements[getIdElement(elements, "foh3_text")].color
                      : "black",
                }}
              >
                Social Media
              </h3>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Social Media
              </a>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Social Media
              </a>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Social Media
              </a>
            </section>
            <section className={style.footerSect}>
              <h3
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foh3_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foh3_text") !== -1
                      ? elements[getIdElement(elements, "foh3_text")].color
                      : "black",
                }}
              >
                Site map
              </h3>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                About
              </a>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                welcome
              </a>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Get started
              </a>
            </section>
            <section className={style.footerSect}>
              <h3
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foh3_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foh3_text") !== -1
                      ? elements[getIdElement(elements, "foh3_text")].color
                      : "black",
                }}
              >
                Legals
              </h3>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Terms
              </a>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                  handleSelectElement(e, "foa1_text")
                }
                style={{
                  color:
                    getIdElement(elements, "foa1_text") !== -1
                      ? elements[getIdElement(elements, "foa1_text")].color
                      : "black",
                }}
              >
                Conditions
              </a>
            </section>
            <p className={style.copy}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleSelectElement(e, "focp_text")
            }
            style={{
              color:
                getIdElement(elements, "focp_text") !== -1
                  ? elements[getIdElement(elements, "focp_text")].color
                  : "black",
            }}
            >
              © 2023 Copyright Ednesor | All Rights Reserved
            </p>
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
      <div
        className={style.tools}
        // TODO: eliminar comentario al finalizar
        style={{ left: openGear ? "5px" : "-100vw" }}
      >
        <input
          type="color"
          name="color1"
          id="color1"
          value={color}
          onChange={handleChangeColor}
        />
        <label
          onClick={handleClicColor}
          htmlFor="color1"
          className={style.color}
          style={{ backgroundColor: color }}
        ></label>
        <button
          style={{ backgroundColor: mode === "select" ? colorBTN : colorNoBTN }}
          onClick={handleClicSelect}
          className={style.selectBtn}
        >
          <AiOutlineSelect className={style.selectIcon} />
        </button>
        <button
          style={{ backgroundColor: mode === "paint" ? colorBTN : colorNoBTN }}
          onClick={handleClicPaint}
          className={style.selectBtn}
        >
          <BiPaint className={style.selectIcon} />
        </button>

        {/* //TODO: asignar funcionalidad */}
        <button hidden
          style={{ backgroundColor: mode === "group" ? colorBTN : colorNoBTN }}
          onClick={handleClicGroup}
          className={style.selectBtn}
        >
          <h1>1</h1>
        </button>
        {/* <p>{mode}</p> */}
        {/* <p>{selection}</p> */}
      </div>
    </main>
  );
}
