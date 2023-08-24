import styles from "./page.module.css";
import data from "../utils/languaje.json";
import Link from "next/link";

export default function Home() {
  // TODO: cambiar el any
  // const setLang = (e: ) => {
  //   console.log(lang);
  // }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data["spanish"][0]}</h1>
      <div className={styles.langContainer}>
        <button>
          <img src="" alt="english" />
        </button>
        <button>
          <img src="" alt="spanish" />
        </button>
        <Link href={"/home"}>{data["spanish"][1]}</Link>
        <Link href={"/guide"}>{data["spanish"][2]}</Link>
      </div>
    </main>
  );
}
