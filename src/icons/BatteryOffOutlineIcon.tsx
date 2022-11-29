import React, { FC, memo } from 'react';
import BatteryOffOutlineSvg from '../svg/battery-off-outline.svg';

export interface IBatteryOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryOffOutlineIcon: FC<IBatteryOffOutlineIconProps> = memo(props => {
  return <BatteryOffOutlineSvg {...props} />;
});
