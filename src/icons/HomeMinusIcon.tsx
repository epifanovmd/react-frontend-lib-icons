import React, { FC, memo } from 'react';
import HomeMinusSvg from '../svg/home-minus.svg';

export interface IHomeMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeMinusIcon: FC<IHomeMinusIconProps> = memo(props => {
  return <HomeMinusSvg {...props} />;
});
