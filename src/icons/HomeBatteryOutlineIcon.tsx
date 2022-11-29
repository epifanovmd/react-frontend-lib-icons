import React, { FC, memo } from 'react';
import HomeBatteryOutlineSvg from '../svg/home-battery-outline.svg';

export interface IHomeBatteryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeBatteryOutlineIcon: FC<IHomeBatteryOutlineIconProps> = memo(props => {
  return <HomeBatteryOutlineSvg {...props} />;
});
