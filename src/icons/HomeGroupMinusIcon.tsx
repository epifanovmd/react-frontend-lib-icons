import React, { FC, memo } from 'react';
import HomeGroupMinusSvg from '../svg/home-group-minus.svg';

export interface IHomeGroupMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeGroupMinusIcon: FC<IHomeGroupMinusIconProps> = memo(props => {
  return <HomeGroupMinusSvg {...props} />;
});
