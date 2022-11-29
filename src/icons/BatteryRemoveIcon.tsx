import React, { FC, memo } from 'react';
import BatteryRemoveSvg from '../svg/battery-remove.svg';

export interface IBatteryRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryRemoveIcon: FC<IBatteryRemoveIconProps> = memo(props => {
  return <BatteryRemoveSvg {...props} />;
});
