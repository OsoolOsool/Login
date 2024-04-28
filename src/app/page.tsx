import Image from "next/image";
import styles from "./page.module.css";
import { TraditionalLogin } from "../../components/TraditionalLogin";
import { InAppLogin } from "../../components/InAppLogin";
import { AALogin } from "../../components/AALogin";

export default function Home() {
  return (
    <main className={styles.main}>
      <TraditionalLogin/>
      <InAppLogin />
      <AALogin />
    </main>
  );
}
