import React, { FC, memo } from 'react';
import HomeOffSvg from '../svg/home-off.svg';

export interface IHomeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeOffIcon: FC<IHomeOffIconProps> = memo(props => {
  return <HomeOffSvg {...props} />;
});
