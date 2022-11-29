import React, { FC, memo } from 'react';
import ChessKingSvg from '../svg/chess-king.svg';

export interface IChessKingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessKingIcon: FC<IChessKingIconProps> = memo(props => {
  return <ChessKingSvg {...props} />;
});
