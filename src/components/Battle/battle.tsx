import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  updatePlayerOneName,
  updatePlayerTwoName,
  updatePlayerOneImage,
  updatePlayerTwoImage,
} from '../../redux/battle/battle.slice';
import PlayerInput from './playerInput';
import PlayerPreview from './playerPreview';

import { RootState } from '../../redux/store';

const Battle = () => {
  const dispatch = useDispatch();
  const playerOneName: string = useSelector(
    (state: RootState) => state.battle.playerOneName,
  );
  const playerTwoName: string = useSelector(
    (state: RootState) => state.battle.playerTwoName,
  );
  const playerOneImage: string | null = useSelector(
    (state: RootState) => state.battle.playerOneImage,
  );
  const playerTwoImage: string | null = useSelector(
    (state: RootState) => state.battle.playerTwoImage,
  );

  const location = useLocation();

  const handleSubmit = (id: string, userName: string): void => {
    if (id === 'playerOne') {
      dispatch(updatePlayerOneName(userName));
      dispatch(
        updatePlayerOneImage(`https://github.com/${userName}.png?size=200`),
      );
    }
    if (id === 'playerTwo') {
      dispatch(updatePlayerTwoName(userName));
      dispatch(
        updatePlayerTwoImage(`https://github.com/${userName}.png?size=200`),
      );
    }
  };

  const handleReset = (id: string): void => {
    if (id === 'playerOne') {
      dispatch(updatePlayerOneName(''));
      dispatch(updatePlayerOneImage(null));
    }
    if (id === 'playerTwo') {
      dispatch(updatePlayerTwoName(''));
      dispatch(updatePlayerTwoImage(null));
    }
  };

  useEffect(() => {
    handleReset('playerOne');
    handleReset('playerTwo');
  }, []);

  return (
    <div>
      <div className="row">
        {!playerOneName ? (
          <PlayerInput
            id="playerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview playerNum={0}>
            <button className="reset" onClick={() => handleReset('playerOne')}>
              Reset
            </button>
          </PlayerPreview>
        )}
        {!playerTwoName ? (
          <PlayerInput
            id="playerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview playerNum={1}>
            <button className="reset" onClick={() => handleReset('playerTwo')}>
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
      {playerOneImage && playerTwoImage && (
        <Link
          className="button"
          to={{
            pathname: location.pathname + '/results',
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
        >
          Battle
        </Link>
      )}
    </div>
  );
};

export default Battle;
