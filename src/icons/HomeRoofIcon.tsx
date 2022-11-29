import React, { FC, memo } from 'react';
import HomeRoofSvg from '../svg/home-roof.svg';

export interface IHomeRoofIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeRoofIcon: FC<IHomeRoofIconProps> = memo(props => {
  return <HomeRoofSvg {...props} />;
});
