import React, { FC, memo } from 'react';
import ChessPawnSvg from '../svg/chess-pawn.svg';

export interface IChessPawnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessPawnIcon: FC<IChessPawnIconProps> = memo(props => {
  return <ChessPawnSvg {...props} />;
});
