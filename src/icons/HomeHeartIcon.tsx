import React, { FC, memo } from 'react';
import HomeHeartSvg from '../svg/home-heart.svg';

export interface IHomeHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeHeartIcon: FC<IHomeHeartIconProps> = memo(props => {
  return <HomeHeartSvg {...props} />;
});
