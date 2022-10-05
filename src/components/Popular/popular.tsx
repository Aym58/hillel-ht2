import SelectedLanguages from './selectedLanguages';
import Repos from './repos';
import { FC } from 'react';

const Popular: FC = (): JSX.Element => {
  return (
    <div>
      <SelectedLanguages />
      <Repos />
    </div>
  );
};

export default Popular;
