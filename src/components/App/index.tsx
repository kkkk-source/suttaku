import Homepage from 'scenes/Homepage';
import styles from './App.module.scss';
import 'styles/theme.scss';

export default function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <Homepage />
    </div>
  );
};
