import React, { FC, memo } from 'react';
import HomeSearchSvg from '../svg/home-search.svg';

export interface IHomeSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSearchIcon: FC<IHomeSearchIconProps> = memo(props => {
  return <HomeSearchSvg {...props} />;
});
