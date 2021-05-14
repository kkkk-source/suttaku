import styles from './RoundedContainer.module.scss';

export default function RoundedContainer({ children }: { children: JSX.Element }) {
  return <article className={styles.roundedContainer}>{children}</article>;
}
