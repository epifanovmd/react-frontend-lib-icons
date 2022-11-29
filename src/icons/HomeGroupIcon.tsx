import React, { FC, memo } from 'react';
import HomeGroupSvg from '../svg/home-group.svg';

export interface IHomeGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeGroupIcon: FC<IHomeGroupIconProps> = memo(props => {
  return <HomeGroupSvg {...props} />;
});
