import styles from './dashboard.module.css';
import ImageContainer from '../imageContainer';

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Acelere a tomada de decisões na sua empresa
      </h1>
      <p className={styles.description}>
        Conheça as áreas da sua empresa que os Dashboards auxiliam na tomada de
        decisão mais rápida e com menor risco de erros.
      </p>
      <ImageContainer src="/Dashboard.png" alt="Dashboard" />
    </section>
  );
}
