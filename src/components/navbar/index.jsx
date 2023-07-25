import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" aria-label="Início">
          <Image
            src="/Logo.png"
            width={64}
            height={64}
            title="DataCulture"
            alt="Data Culture"
          />
        </Link>

        <div className={styles.links}>
          <Link aria-label="Início" href="/">
            Início
          </Link>
          <Link aria-label="Sobre" href="/sobre">
            Sobre
          </Link>
        </div>
      </nav>
      <div className={styles.invisible}></div>
    </>
  );
}
