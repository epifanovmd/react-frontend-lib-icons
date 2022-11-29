import React, { FC, memo } from 'react';
import PuzzleCheckOutlineSvg from '../svg/puzzle-check-outline.svg';

export interface IPuzzleCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleCheckOutlineIcon: FC<IPuzzleCheckOutlineIconProps> = memo(props => {
  return <PuzzleCheckOutlineSvg {...props} />;
});
