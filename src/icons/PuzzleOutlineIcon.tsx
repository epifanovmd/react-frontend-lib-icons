import React, { FC, memo } from 'react';
import PuzzleOutlineSvg from '../svg/puzzle-outline.svg';

export interface IPuzzleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleOutlineIcon: FC<IPuzzleOutlineIconProps> = memo(props => {
  return <PuzzleOutlineSvg {...props} />;
});
