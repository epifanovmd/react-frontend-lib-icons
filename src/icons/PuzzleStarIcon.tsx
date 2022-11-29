import React, { FC, memo } from 'react';
import PuzzleStarSvg from '../svg/puzzle-star.svg';

export interface IPuzzleStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleStarIcon: FC<IPuzzleStarIconProps> = memo(props => {
  return <PuzzleStarSvg {...props} />;
});
