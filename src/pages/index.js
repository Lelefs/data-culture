import Dashboard from "@/components/dashboard";
import Head from "next/head";

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
      <Dashboard />
    </>
  );
}
