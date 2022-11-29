import React, { FC, memo } from 'react';
import ChessQueenSvg from '../svg/chess-queen.svg';

export interface IChessQueenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessQueenIcon: FC<IChessQueenIconProps> = memo(props => {
  return <ChessQueenSvg {...props} />;
});
