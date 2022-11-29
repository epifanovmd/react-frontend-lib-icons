import React, { FC, memo } from 'react';
import PuzzleStarOutlineSvg from '../svg/puzzle-star-outline.svg';

export interface IPuzzleStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleStarOutlineIcon: FC<IPuzzleStarOutlineIconProps> = memo(props => {
  return <PuzzleStarOutlineSvg {...props} />;
});
