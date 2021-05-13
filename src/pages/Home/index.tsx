import Sypnosis from 'components/Sypnosis';
import { SYPNOSIS, SypnosisProps } from 'mock-sypnosis';

export default function Home(): JSX.Element  {
  const sypnosis: Array<SypnosisProps> = SYPNOSIS; 
  const sypnosisJsxElements: Array<JSX.Element> = [];

  for (let i = 0; i < sypnosis.length; i++) {
    const resume = sypnosis[i];
    sypnosisJsxElements.push(
      <Sypnosis 
        key={i} 
        imgUrl={resume.imgUrl} 
        categories={resume.categories}
        title={resume.title} 
        subtitle={resume.subtitle} 
        time={resume.time} 
      />
    );
  }

  return <div>{sypnosisJsxElements}</div>;
};
