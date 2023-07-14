import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const textoGeral =
    "Olá! Vi seu site e gostaria de fazer um orçamento de serviço com você";
  const assuntoEmail = "Solicitação de orçamento";

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h3>Data Culture</h3>

        <p>Endereço virá aqui</p>

        <div className={styles.contacts}>
          <Link href="https://www.instagram.com/_dataculture/" target="_blank">
            <FaInstagram size={35} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/dtculture/"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </Link>

          <Link
            href={`https://wa.me/5511975720884?text=${textoGeral}.`}
            target="_blank"
          >
            <FaWhatsapp size={35} />
          </Link>

          <Link
            href={`mailto:lucas.lapastini@dtculture.com.br?subject=${assuntoEmail}`}
          >
            <FiMail size={35} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
