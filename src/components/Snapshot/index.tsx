import styles from './Snapshot.module.scss';

export default function Snapshot({ title, time, imgUrl }: { title?: string, time?: string, imgUrl?: string }) {
  return (
    <article className={styles.snapshot}>
      <a href="/#">
        <div>
          <h4>Chinese Test</h4>
          <time>Sep 09, 2020</time>
        </div>
        <img src="https://d33wubrfki0l68.cloudfront.net/e7b81c3834dbdf86da47bd55be8f171a2faff64d/c9cf2/p/test-chinese/helena-hertz-wwzzxldpmog-unsplash_hu45a5e3ad5e058da6a00650ed8fd40bea_15530_800x0_resize_q75_box.jpg" alt=""/>
      </a>
    </article>
  );
}
