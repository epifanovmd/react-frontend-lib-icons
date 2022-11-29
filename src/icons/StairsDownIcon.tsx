import React, { FC, memo } from 'react';
import StairsDownSvg from '../svg/stairs-down.svg';

export interface IStairsDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StairsDownIcon: FC<IStairsDownIconProps> = memo(props => {
  return <StairsDownSvg {...props} />;
});
