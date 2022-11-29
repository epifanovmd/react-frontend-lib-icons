import React, { FC, memo } from 'react';
import HomeFloor1Svg from '../svg/home-floor-1.svg';

export interface IHomeFloor1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloor1Icon: FC<IHomeFloor1IconProps> = memo(props => {
  return <HomeFloor1Svg {...props} />;
});
