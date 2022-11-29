import React, { FC, memo } from 'react';
import PuzzleHeartSvg from '../svg/puzzle-heart.svg';

export interface IPuzzleHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleHeartIcon: FC<IPuzzleHeartIconProps> = memo(props => {
  return <PuzzleHeartSvg {...props} />;
});
