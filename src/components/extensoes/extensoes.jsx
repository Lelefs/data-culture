import ImageContainer from "../imageContainer";
import styles from "./extensoes.module.css";

export default function Extensoes() {
  return (
    <div>
      <h1>Extensões e Acompanhamentos</h1>

      <p className={styles.title}>
        Os planos possuem duração determinadas durante o mapeamento, levanto em
        conta o volume e complexidade do trabalho a ser realizado. Porém, após o
        vencimento do plano principal, alguns planos de acompanhamento são
        oferecidos:
      </p>

      <div className={styles.divlist}>
        <ImageContainer
          src="/inicio/15.png"
          alt="Extensões e Acompanhamentos"
        />

        <ul className={styles.list}>
          <li>
            <b>SMB Following:</b> Plano de extensão e acompanhamento focado
            especial para empresas que optaram pelo plano SMB.
            <ul style={{ padding: "0.5rem 0 0 30px" }}>
              <li>Acompanhamento e suporte simples;</li>
              <li>Desenvolvimento ilimitado de Dashboards;</li>
              <li>Suporte em obtenção de insights.</li>
            </ul>
          </li>

          <li>
            <b>Keep Climbing:</b> Extensão para os assinantes do plano Montain
            Climber. Suporte completo de todo fluxo do sistema, desenvolvimento
            de Dashboards e suporte em obtenção de insights.
          </li>
          <li>
            <b>G.O.A.T Sales:</b> Continue aumentando ainda mais suas
            oportunidades de vendas! Todo o suporte com fluxo do sistema,
            desenvolvimento de Dashboards e suporte em obtenção de insights e
            coordenação, acompanhamento da equipe Smart Sales.
          </li>
        </ul>
      </div>
    </div>
  );
}
