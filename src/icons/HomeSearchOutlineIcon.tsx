import React, { FC, memo } from 'react';
import HomeSearchOutlineSvg from '../svg/home-search-outline.svg';

export interface IHomeSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSearchOutlineIcon: FC<IHomeSearchOutlineIconProps> = memo(props => {
  return <HomeSearchOutlineSvg {...props} />;
});
