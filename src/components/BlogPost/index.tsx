import { useParams } from 'react-router-dom';
import { getBlogPostByTitle } from 'services/PostService';
import RoundBox from 'components/RoundBox';
import CategoryLinkList from 'components/CategoryLinkList';
import ClockSVG from 'components/svg/ClockSVG';
import styles from './BlogPost.module.scss';

export default function BlogPost() {
  const { title } = useParams<{ title: string }>();
  const post = getBlogPostByTitle(title);
  return (
    <RoundBox>
      <div className={styles.blogPost}>
        <header>
          <img src={post!.imgUrl} alt={''}/>
        </header>
        <div>
          <CategoryLinkList
            categories={post!.categories} 
          />
          <h2>{post!.title}</h2>
          <h3>{post!.subtitle}</h3>
          <footer>
            <ClockSVG />
            <time>{post!.time}</time>
          </footer>
        </div>
      </div>
    </RoundBox>
  );
}
