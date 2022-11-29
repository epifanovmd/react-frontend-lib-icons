import React, { FC, memo } from 'react';
import HomeFloorBSvg from '../svg/home-floor-b.svg';

export interface IHomeFloorBIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloorBIcon: FC<IHomeFloorBIconProps> = memo(props => {
  return <HomeFloorBSvg {...props} />;
});
