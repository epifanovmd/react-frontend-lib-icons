import React, { FC, memo } from 'react';
import PuzzlePlusSvg from '../svg/puzzle-plus.svg';

export interface IPuzzlePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzlePlusIcon: FC<IPuzzlePlusIconProps> = memo(props => {
  return <PuzzlePlusSvg {...props} />;
});
