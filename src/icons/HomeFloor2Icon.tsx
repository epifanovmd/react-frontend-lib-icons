import React, { FC, memo } from 'react';
import HomeFloor2Svg from '../svg/home-floor-2.svg';

export interface IHomeFloor2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloor2Icon: FC<IHomeFloor2IconProps> = memo(props => {
  return <HomeFloor2Svg {...props} />;
});
