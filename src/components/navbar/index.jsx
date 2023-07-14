import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            src="/Transparente.png"
            width={64}
            height={64}
            alt="Data Culture"
          />
        </Link>

        <div className={styles.links}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>
      <div className={styles.invisible}></div>
    </>
  );
}
