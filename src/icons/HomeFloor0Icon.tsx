import React, { FC, memo } from 'react';
import HomeFloor0Svg from '../svg/home-floor-0.svg';

export interface IHomeFloor0IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloor0Icon: FC<IHomeFloor0IconProps> = memo(props => {
  return <HomeFloor0Svg {...props} />;
});
