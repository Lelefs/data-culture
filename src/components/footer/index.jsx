import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from "./footer.module.css";
import Link from "next/link";
import NomeEmpresa from "../nomeEmpresa/nomeEmpresa";

export default function Footer() {
  const textoGeral =
    "Olá! Vi seu site e gostaria de fazer um orçamento de serviço com você";
  const assuntoEmail = "Solicitação de orçamento";

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <NomeEmpresa />

        <div className={styles.contacts}>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/_dataculture/"
            target="_blank"
          >
            <FaInstagram size={35} />
          </Link>

          <Link
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/dtculture/"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </Link>

          <Link
            aria-label="Whatsapp"
            href={`https://wa.me/5511975720884?text=${textoGeral}.`}
            target="_blank"
          >
            <FaWhatsapp size={35} />
          </Link>

          <Link
            aria-label="E-mail"
            href={`mailto:lucas.lapastini@dtculture.com.br?subject=${assuntoEmail}`}
          >
            <FiMail size={35} />
          </Link>
        </div>

        <p className={styles.copyright}>
          © 2023 - Desenvolvido por <strong>FSET</strong>
        </p>
      </footer>
    </div>
  );
}
