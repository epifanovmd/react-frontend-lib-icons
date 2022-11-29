import React, { FC, memo } from 'react';
import HomeSwitchSvg from '../svg/home-switch.svg';

export interface IHomeSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSwitchIcon: FC<IHomeSwitchIconProps> = memo(props => {
  return <HomeSwitchSvg {...props} />;
});
