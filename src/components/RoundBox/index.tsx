import styles from './RoundBox.module.scss';

export default function RoundBox({ children }: { children: JSX.Element }) {
  return <article className={styles.roundBox}>{children}</article>;
}
