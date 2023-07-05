import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.header}>Bem vindo à Fast Drinks!</h1>
      <div className={styles.container}>
        <p className={styles.notification}>Esta página ainda está em produção 🚧</p>
        <p className={styles.notification}>por favor, tenha paciência. 👷‍♂️</p>
        <p className={styles.notification}>Agradecemos muito a compreenção 🙇‍♂️</p>
      </div>
    </div>
  );
}