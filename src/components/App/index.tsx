import { FunctionComponent } from 'react';
import Sypnosis from 'components/Sypnosis';
import { SYPNOSIS, SypnosisProps } from '../../mock-sypnosis';

const App: FunctionComponent = () => {
  const sypnosis: Array<SypnosisProps> = SYPNOSIS; 
  const sypnosisComponents: Array<JSX.Element> = [];

  for (const s of sypnosis) {
    sypnosisComponents.push(
      <Sypnosis 
        imgUrl={s.imgURL} title={s.title} 
        subtitle={s.subtitle} time={s.time}
      />
    );
  }

  return (
    <div>
      {sypnosisComponents}
    </div>
  );
};

export default App;
