import Dashboard from "@/components/dashboard";
import Inicio from "@/components/inicio/inicio";
import Head from "next/head";

import styles from "@/styles/inicio.module.css";
import Beneficios from "@/components/beneficios/beneficios";
import Crescimento from "@/components/crescimento/crescimento";
import Extensoes from "@/components/extensoes/extensoes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Culture</title>
        <meta
          name="description"
          content="Business intelligence (BI) e ciência de dados para coletar, analisar e interpretar dados para orientar decisões de negócios."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="keywords"
          content="Business Intelligence, Data Science, Inside Sales, Gerenciamento de dados, Modelagem de dados, Montagem de equipe inside sales, Arquitetura de dados, Plataformas BI e Tratamento de dados"
        />
      </Head>

      <div className={styles.container}>
        <Inicio />

        <Beneficios />

        <Crescimento />

        <Extensoes />

        <Dashboard />
      </div>
    </>
  );
}
