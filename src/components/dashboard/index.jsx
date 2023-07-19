import styles from "./dashboard.module.css";
import ImageContainer from "../imageContainer";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>DemoDashs</h1>

      <div className={styles.maincontainer}>
        <div>
          <p className={styles.title}>
            Você pode navegar em nosso site e analisar os cases de demonstração
            que disponibilizamos, como:
          </p>

          <ul className={styles.list}>
            <li>Gerenciamento e tratamento de dados</li>
            <li>
              Desenvolvimento de sistema enxuto para obtenção de insights de
              forma rápida e fácil
            </li>
            <li>
              Desenvolvimentos ilimitados de Dashboards durante o período do
              plano
            </li>
            <li>Suporte na obtenção de insights via ferramenta DataViz</li>
          </ul>

          <p className={styles.title}>
            Através do link:{" "}
            <Link
              href="https://bit.ly/3NSciIT"
              target="_blank"
              className={styles.linkDash}
            >
              https://bit.ly/3NSciIT
            </Link>
          </p>

          <p className={styles.title}>
            Também disponibilizamos acessos aos nossos DemoDashs, para que possa
            testar e se aprofundar cada vez mais na jornada DataDriven!
          </p>
        </div>

        <ImageContainer src="/Dashboard.png" alt="Dashboard" />
      </div>
    </div>
  );
}
