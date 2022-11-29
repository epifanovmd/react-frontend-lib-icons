import React, { FC, memo } from 'react';
import PuzzleMinusOutlineSvg from '../svg/puzzle-minus-outline.svg';

export interface IPuzzleMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleMinusOutlineIcon: FC<IPuzzleMinusOutlineIconProps> = memo(props => {
  return <PuzzleMinusOutlineSvg {...props} />;
});
