import React, { FC, memo } from 'react';
import BatteryPlusSvg from '../svg/battery-plus.svg';

export interface IBatteryPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryPlusIcon: FC<IBatteryPlusIconProps> = memo(props => {
  return <BatteryPlusSvg {...props} />;
});
