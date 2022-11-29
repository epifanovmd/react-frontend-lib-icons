import React, { FC, memo } from 'react';
import HomeFloorGSvg from '../svg/home-floor-g.svg';

export interface IHomeFloorGIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloorGIcon: FC<IHomeFloorGIconProps> = memo(props => {
  return <HomeFloorGSvg {...props} />;
});
