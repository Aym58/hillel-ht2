import { FC } from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const ErrorMessage: FC = (): JSX.Element => {
  const error: string | null = useSelector(
    (state: RootState): string | null => state.popular.error,
  );
  return (
    <div className="error-screen column">
      <h1>ERROR: {error}</h1>
    </div>
  );
};

export default ErrorMessage;
