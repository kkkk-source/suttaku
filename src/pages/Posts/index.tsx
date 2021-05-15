import PostSummary from 'components/PostSummary';
import { getPostSummary, PostSummaryResponse } from 'services/PostService';

export default function Posts(): JSX.Element  {
  const postsSummary: Array<PostSummaryResponse> = getPostSummary(); 
  const postSummaryJsxElements: Array<JSX.Element> = [];

  for (let i = 0; i < postsSummary.length; i++) {
    const post = postsSummary[i];
    postSummaryJsxElements.push(
      <PostSummary 
        key={i} 
        imgUrl={post.imgUrl} 
        categories={post.categories}
        title={post.title} 
        subtitle={post.subtitle} 
        time={post.time} 
      />
    );
  }

  return <div>{postSummaryJsxElements}</div>;
};
