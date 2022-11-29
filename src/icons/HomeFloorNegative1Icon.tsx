import React, { FC, memo } from 'react';
import HomeFloorNegative1Svg from '../svg/home-floor-negative-1.svg';

export interface IHomeFloorNegative1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloorNegative1Icon: FC<IHomeFloorNegative1IconProps> = memo(props => {
  return <HomeFloorNegative1Svg {...props} />;
});
