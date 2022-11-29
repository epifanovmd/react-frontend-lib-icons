import React, { FC, memo } from 'react';
import HomeFloorLSvg from '../svg/home-floor-l.svg';

export interface IHomeFloorLIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloorLIcon: FC<IHomeFloorLIconProps> = memo(props => {
  return <HomeFloorLSvg {...props} />;
});
