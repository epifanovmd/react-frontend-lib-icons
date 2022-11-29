import React, { FC, memo } from 'react';
import ChessKnightSvg from '../svg/chess-knight.svg';

export interface IChessKnightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessKnightIcon: FC<IChessKnightIconProps> = memo(props => {
  return <ChessKnightSvg {...props} />;
});
