import styles from './CardLayout.module.scss';

export default function CardLayout({ children }: { children: JSX.Element }) {
  return <article className={styles.cardLayout}>{children}</article>;
}
