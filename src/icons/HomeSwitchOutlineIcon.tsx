import React, { FC, memo } from 'react';
import HomeSwitchOutlineSvg from '../svg/home-switch-outline.svg';

export interface IHomeSwitchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSwitchOutlineIcon: FC<IHomeSwitchOutlineIconProps> = memo(props => {
  return <HomeSwitchOutlineSvg {...props} />;
});
