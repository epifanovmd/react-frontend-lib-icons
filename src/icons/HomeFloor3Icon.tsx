import React, { FC, memo } from 'react';
import HomeFloor3Svg from '../svg/home-floor-3.svg';

export interface IHomeFloor3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloor3Icon: FC<IHomeFloor3IconProps> = memo(props => {
  return <HomeFloor3Svg {...props} />;
});
