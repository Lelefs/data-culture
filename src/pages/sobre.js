import Head from "next/head";

import styles from "@/styles/sobre.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre | Data Culture</title>
        <meta name="description" content="Criado por Leandro Finochio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <p>Introduzindo o seu negócio ao Data Driven!</p>

        <p>
          A cultura orientada a dados é uma forma de abordagem empresarial na
          qual as decisões são tomadas com base em dados, evidências e análises,
          em vez de suposições ou opiniões subjetivas. É uma maneira eficaz de
          lidar com grandes volumes de informações e garantir que as decisões
          sejam tomadas com base em fatos confiáveis, reduzindo a possibilidade
          de erros e incertezas.
        </p>

        <p>
          Dentro dessa cultura, trabalhamos com business intelligence (BI) e
          ciência de dados para coletar, analisar e interpretar dados para
          orientar decisões de negócios.
        </p>

        <p>
          • &nbsp;BI: Utiliza-se de tecnologias e práticas que permitem às
          empresas coletar, integrar e analisar grandes quantidades de dados
          para identificar tendências, padrões e insights valiosos que ajudam a
          tomar decisões de negócios mais informadas e estratégicas. As
          ferramentas de BI incluem dashboards, relatórios, análise de dados e
          visualizações.
        </p>

        <p>
          • &nbsp;Ciência de dados: É uma disciplina que se concentra na coleta,
          análise e interpretação de dados para extrair insights valiosos e
          informar decisões de negócios. Isso inclui técnicas como mineração de
          dados, modelagem estatística e aprendizado de máquina.
        </p>

        <p>Juntos, BI e ciência de dados podem ajudar as empresas a:</p>

        <ul>
          <li>Identificar tendências de negócios</li>
          <li>Melhorar a eficiência operacional</li>
          <li>Identificar oportunidades de mercado e crescimento</li>
          <li>Melhorar a experiência do cliente</li>
          <li>Tomar decisões de negócios mais informadas e estratégicas</li>
        </ul>

        <p>
          Trabalhando dessa forma, pode-se definir estratégias de vendas, como
          quais produtos ou serviços vender para quais clientes e em que
          momento. Através de algoritmos e técnicas estatísticas avançadas para
          analisar dados e fazer previsões sobre o comportamento do cliente e o
          desempenho das vendas.
        </p>

        <p>
          Ter uma equipe de inside sales inteligente, alimentada e direcionada
          por esse tipo de informações pode ser ainda mais eficaz!
        </p>

        <p>E com tudo isso, a DataCulture pode te ajudar!</p>
      </main>
    </>
  );
}
