import React, { FC, memo } from 'react';
import ChessBishopSvg from '../svg/chess-bishop.svg';

export interface IChessBishopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChessBishopIcon: FC<IChessBishopIconProps> = memo(props => {
  return <ChessBishopSvg {...props} />;
});
