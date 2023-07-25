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

        <meta property="og:url" content="https://dtculture.com.br" />
        <meta property="og:title" content="Data Culture" />

        <meta property="twitter:url" content="https://dtculture.com.br" />
        <meta property="twitter:title" content="Data Culture" />

        <meta
          name="google-site-verification"
          content="8GdimxrcSQIMCYqOpGROGga-bewGOMC6nCTRB65sI-k"
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
