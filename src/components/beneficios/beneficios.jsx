import styles from "./beneficios.module.css";
import ImageContainer from "../imageContainer";
import NomeEmpresa from "../nomeEmpresa/nomeEmpresa";

export default function Beneficios() {
  return (
    <div>
      <h1>
        Quais os benefícios de se trabalhar com B.I. e ser uma empresa Data
        Driven?
      </h1>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <ImageContainer
            src="/inicio/10.png"
            alt="Tomada de decisões"
            width="100px"
          />
          <p>Tomada de decisões de forma rápida e independente</p>
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer
            src="/inicio/11.png"
            alt="Informações sólidas"
            width="100px"
          />
          <p className={styles.p}>
            Informações sólidas e precisas <br />= Decisões assertivas
            <br />= Resultados positivos
          </p>
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer src="/inicio/12.png" alt="Tempo real" width="100px" />
          <p className={styles.p}>
            Respostas para perguntas fundamentais em tempo real
          </p>
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer src="/inicio/13.png" alt="Tempo real" width="100px" />
          <p>
            Identificar comportamentos e padrões baseados em históricos para
            previsões de acontecimento futuro
          </p>
        </div>

        <div className={styles.sectionInfo}>
          <ImageContainer src="/inicio/14.png" alt="Tempo real" width="100px" />
          <p>Vantagem competitiva</p>
        </div>
      </section>

      <div className={styles.ajudar}>
        Como a
        <ImageContainer
          src="/DataCulture.png"
          alt="Data Culture"
          width="221px"
        />
        pode te ajudar?
      </div>
    </div>
  );
}
