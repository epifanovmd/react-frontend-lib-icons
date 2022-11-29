import React, { FC, memo } from 'react';
import PuzzleRemoveOutlineSvg from '../svg/puzzle-remove-outline.svg';

export interface IPuzzleRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleRemoveOutlineIcon: FC<IPuzzleRemoveOutlineIconProps> = memo(props => {
  return <PuzzleRemoveOutlineSvg {...props} />;
});
