import React, { FC, memo } from 'react';
import HomeFloorASvg from '../svg/home-floor-a.svg';

export interface IHomeFloorAIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloorAIcon: FC<IHomeFloorAIconProps> = memo(props => {
  return <HomeFloorASvg {...props} />;
});
