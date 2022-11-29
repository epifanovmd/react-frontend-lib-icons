import React, { FC, memo } from 'react';
import PuzzlePlusOutlineSvg from '../svg/puzzle-plus-outline.svg';

export interface IPuzzlePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzlePlusOutlineIcon: FC<IPuzzlePlusOutlineIconProps> = memo(props => {
  return <PuzzlePlusOutlineSvg {...props} />;
});
