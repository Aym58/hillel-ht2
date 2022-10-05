import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchBattleResults } from '../../redux/battle/battle.thunk';
import { RootState } from '../../redux/store';

import type { PlayerType } from '../../types/types';

import Loader from '../../loader';
import PlayerPreview from './playerPreview';
import PlayerInfo from './playerInfo';
import ErrorMessage from '../Error';

const Results = () => {
  const dispatch = useDispatch();
  const players: PlayerType[] = useSelector(
    (state: RootState) => state.battle.players,
  );
  const loader = useSelector((state: RootState) => state.battle.loader);
  const error = useSelector((state: RootState) => state.battle.error);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const playersNameQuery = [
      searchParams.get('playerOneName'),
      searchParams.get('playerTwoName'),
    ];
    dispatch(fetchBattleResults(playersNameQuery));
  }, []);

  if (loader) {
    return <Loader />;
  } else if (error) {
    return <ErrorMessage />;
  } else {
    return (
      <div className="row">
        {players.map((player: PlayerType, arrId: number) => {
          return (
            <div key={arrId} className="column results">
              <div className="results-header">
                {arrId === 0 && <h1>Winner</h1>}
                {arrId === 1 && <h2>Loser</h2>}
                <h3>Score: {player.score}</h3>
              </div>
              <PlayerPreview playerNum={arrId}>
                <PlayerInfo playerNum={arrId} />
              </PlayerPreview>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Results;
