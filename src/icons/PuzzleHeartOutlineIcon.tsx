import React, { FC, memo } from 'react';
import PuzzleHeartOutlineSvg from '../svg/puzzle-heart-outline.svg';

export interface IPuzzleHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleHeartOutlineIcon: FC<IPuzzleHeartOutlineIconProps> = memo(props => {
  return <PuzzleHeartOutlineSvg {...props} />;
});
