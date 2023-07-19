import styles from "./inicio.module.css";

export default function Inicio() {
  return (
    <div className={styles.container}>
      <h1>O nosso negócio é a evolução do seu negócio!</h1>

      <h2>Tomada de decisão baseada em dados, fatos!</h2>
      <span>
        Estamos cercados por dados e informações que podem ser como ouro para os
        negócios!
      </span>

      <div>
        <h3>Soluções personalizadas</h3>
        <p>
          De empresas pequenas até gigantes! Sejam os dados armazenados em
          planilhas, CRM/ERP ou grandes bancos de dados, conseguimos te ajudar!
        </p>
      </div>

      <div>
        <h3>Mapeamento e Arquitetura</h3>
        <p>
          Mapeamento do caminho percorrido pelos dados, desde sua origem até a
          extração de informações.
        </p>
      </div>

      <div>
        <h3>Gerenciamento e tratamento de dados</h3>
        <p>
          Garantia de que esses dados cheguem com qualidade para que deles
          possam ser extraídas as melhores e mais sólidas informações.
        </p>
      </div>

      <div>
        <h3>Transformação e disponibilidade</h3>
        <p>
          Através de ferramentas e algoritmos de inteligência artificial,
          extraímos as melhores informações dos dados, disponibilizando de uma
          forma de fácil absorção via dashboards.
        </p>
      </div>

      <div>
        <h3>Vendas orientada a dados</h3>
        <p>
          Com as informações obtidas através dos dados unidos à nossa equipe de
          Smart Sales, geramos novas oportunidades de negócios de forma
          assertiva!
        </p>
      </div>
    </div>
  );
}
