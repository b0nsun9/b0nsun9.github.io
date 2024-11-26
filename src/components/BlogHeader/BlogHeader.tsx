import Link from "next/link";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./BlogHeader.module.css";

export default function BlogHeader() {
  return (
    <header className={styles['blog-header']} role="banner">
      <div className={styles.wrapper}>
        <Link className={styles['blog-title']} href="/">Bonsung Koo</Link>
        <NavigationBar />
      </div>
    </header>
  )
}