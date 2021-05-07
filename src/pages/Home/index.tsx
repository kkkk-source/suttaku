import { FunctionComponent } from 'react';
import Sypnosis from 'components/Sypnosis';
import { SYPNOSIS, SypnosisProps } from '../../mock-sypnosis';

const Home: FunctionComponent = () => {
  const sypnosis: Array<SypnosisProps> = SYPNOSIS; 
  const sypnosisJSXElements: Array<JSX.Element> = [];

  for (let i = 0; i < sypnosis.length; i++) {
    const syp = sypnosis[i];
    sypnosisJSXElements.push(
      <Sypnosis key={i} 
        imgUrl={syp.imgUrl} title={syp.title} 
        subtitle={syp.subtitle} time={syp.time} categories={syp.categories}
      />
    );
  }

  return (
    <div>
      {sypnosisJSXElements}
    </div>
  );
};

export default Home;
