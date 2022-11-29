import React, { FC, memo } from 'react';
import PuzzleMinusSvg from '../svg/puzzle-minus.svg';

export interface IPuzzleMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleMinusIcon: FC<IPuzzleMinusIconProps> = memo(props => {
  return <PuzzleMinusSvg {...props} />;
});
