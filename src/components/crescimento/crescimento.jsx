import styles from "./crescimento.module.css";
import ImageContainer from "../imageContainer";

export default function Crescimento() {
  return (
    <div>
      <h1>O plano ideal para seu crescimento!</h1>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <ImageContainer src="/inicio/smb.png" alt="SMB" width="275px" />

          <h2>SMB</h2>

          <p className={styles.title}>(Small and Medium Business)</p>

          <p className={styles.description}>
            Plano focado em pequenos e médios negócios que buscam soluções
            simples e armazenam seus dados em planilhas ou sistemas enxutos.
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
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer
            src="/inicio/montain.png"
            alt="Montain Climber"
            width="275px"
          />

          <h2>Montain Climber</h2>

          <p className={styles.description}>
            Como o próprio nome diz, escalador de montanha. É um plano
            direcionado para empresas que desejam evoluir na escada de
            maturidade analítica, até que se tornem uma empresa Data Driven, ou
            seja totalmente guiada e orientada por dados.
          </p>

          <p className={styles.description}>
            Abrange tamanho de empresa, desde pequenas até grandes. Além de todo
            tipo de armazenamento de dados (planilhas, banco de dados,
            CRM/ERP...), desde enxutos à grande quantidade de dados.
          </p>

          <ul className={styles.list}>
            <li>
              Montagem do sistema a partir do momento em que os dados são
              captados, estruturando-os e armazenando-os.
            </li>
            <li>
              Gerenciamento, tratamento e modelagem dedados (com uso de
              inteligência artificial se necessário).
            </li>
            <li>
              Desenvolvimento ilimitado de Dashboards para fácil visualização e
              interpretação de dados.
            </li>
            <li>
              Suporte na obtenção e interpretação de insights via ferramenta
              DataViz.
            </li>
            <li>Avanço na escala de maturidade analítica até o Data Driven.</li>
          </ul>
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer
            src="/inicio/smart.png"
            alt="Smart Sales"
            width="275px"
          />

          <h2>Smart Sales</h2>

          <p className={styles.description}>
            Um plano diferente! Focada em quem tem o objetivo de alavancar as
            vendas de fato!
          </p>

          <p className={styles.description}>
            Além do foco na evolução da escala de maturidade analítica, esse
            plano visa a expansão comercial, levantamento de novas oportunidades
            de vendas!
          </p>

          <ul className={styles.list}>
            <li>Todo serviço incluso no plano Montain Climber.</li>
            <li>
              Montagem de equipe Inside Sales (vendas internas) orientada à
              dados. Trabalhando com foco, projetos montados e objetivos para
              aumento de números de oportunidades de vendas;
            </li>
            <li>
              Suporte, acompanhamento e coordenação da equipe fornecida pela
              DataCulture.
            </li>
            <li>
              Moldável de acordo com a vontade e necessidade de sua empresa!
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
