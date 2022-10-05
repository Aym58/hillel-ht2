import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IPlayerPreviewProps {
  playerNum: number;
  children: React.ReactNode;
}

const PlayerPreview = (props: IPlayerPreviewProps) => {
  const playerName: string = useSelector((state: RootState): string => {
    if (props.playerNum === 0) {
      return state.battle.playerOneName;
    } else {
      return state.battle.playerTwoName;
    }
  });
  const playerImage: string | null = useSelector(
    (state: RootState): string | null => {
      if (props.playerNum === 0) {
        return state.battle.playerOneImage;
      } else {
        return state.battle.playerTwoImage;
      }
    },
  );

  return (
    <div>
      <div className="column">
        <img
          className="avatar"
          src={playerImage === null ? '' : playerImage}
          alt="avatar"
        />
        <h2 className="username">{playerName}</h2>
      </div>
      {props.children}
    </div>
  );
};

export default PlayerPreview;
