import React, { FC, memo } from 'react';
import BatteryPlusOutlineSvg from '../svg/battery-plus-outline.svg';

export interface IBatteryPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryPlusOutlineIcon: FC<IBatteryPlusOutlineIconProps> = memo(props => {
  return <BatteryPlusOutlineSvg {...props} />;
});
