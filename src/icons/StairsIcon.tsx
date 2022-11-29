import React, { FC, memo } from 'react';
import StairsSvg from '../svg/stairs.svg';

export interface IStairsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StairsIcon: FC<IStairsIconProps> = memo(props => {
  return <StairsSvg {...props} />;
});
