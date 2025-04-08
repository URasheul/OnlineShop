

import Header from "@/components/Header/Header";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.main}>
      Main page
      <Header/>
    </div>   
  );
}
