import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      style={
        { 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100vh",
          fontSize: "60px"
        }
      }
    >
      <div>
        <p style={{  fontSize: "60px", textAlign: "center" }}>
          {"Bonsung's blog is comming soon!"}
        </p>
        <br />
        <p style={{  fontSize: "60px", textAlign: "center" }}>
          {"It's working with"} <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </p>
      </div>
    </div>
  );
}
