import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          name="description"
          content="Business intelligence (BI) e ciência de dados para coletar, analisar e interpretar dados para orientar decisões de negócios."
        />
        <link rel="canonical" href="https://dtculture.com.br" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="keywords"
          content="Business Intelligence, Data Science, Inside Sales, Gerenciamento de dados, Modelagem de dados, Montagem de equipe inside sales, Arquitetura de dados, Plataformas BI e Tratamento de dados"
        />

        <meta property="og:type" content="website" />
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
          property="twitter:description"
          content="Business intelligence (BI) e ciência de dados para coletar, analisar e interpretar dados para orientar decisões de negócios."
        />
        <meta
          property="twitter:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/Dataculture.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
