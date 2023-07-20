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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://data-culture.vercel.app/" />
        <meta property="og:title" content="Data Culture" />
        <meta
          property="og:description"
          content="Business intelligence (BI) e ciência de dados para coletar, analisar e interpretar dados para orientar decisões de negócios."
        />
        <meta
          property="og:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/Dataculture.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://data-culture.vercel.app/"
        />
        <meta property="twitter:title" content="Data Culture" />
        <meta
          property="twitter:description"
          content="Business intelligence (BI) e ciência de dados para coletar, analisar e interpretar dados para orientar decisões de negócios."
        />
        <meta
          property="twitter:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/Dataculture.png"
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
