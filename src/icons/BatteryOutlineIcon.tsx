import React, { FC, memo } from 'react';
import BatteryOutlineSvg from '../svg/battery-outline.svg';

export interface IBatteryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryOutlineIcon: FC<IBatteryOutlineIconProps> = memo(props => {
  return <BatteryOutlineSvg {...props} />;
});
