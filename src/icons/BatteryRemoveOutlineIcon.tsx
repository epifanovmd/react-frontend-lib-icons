import React, { FC, memo } from 'react';
import BatteryRemoveOutlineSvg from '../svg/battery-remove-outline.svg';

export interface IBatteryRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryRemoveOutlineIcon: FC<IBatteryRemoveOutlineIconProps> = memo(props => {
  return <BatteryRemoveOutlineSvg {...props} />;
});
