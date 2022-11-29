import React, { FC, memo } from 'react';
import ChessRookSvg from '../svg/chess-rook.svg';

export interface IChessRookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessRookIcon: FC<IChessRookIconProps> = memo(props => {
  return <ChessRookSvg {...props} />;
});
