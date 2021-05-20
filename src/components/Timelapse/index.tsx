import styles from './Timelapse.module.scss';

export default function Timelapse({ 
  year, 
  snaptshots 
}: 
  { year: string, 
    snaptshots: Array<JSX.Element> 
}): JSX.Element {
  return (
    <div className={styles.timelapse}>
      <h3>{year}</h3>
      <section>{snaptshots}</section>
    </div>
  );
}
