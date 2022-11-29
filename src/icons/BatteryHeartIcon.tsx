import React, { FC, memo } from 'react';
import BatteryHeartSvg from '../svg/battery-heart.svg';

export interface IBatteryHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryHeartIcon: FC<IBatteryHeartIconProps> = memo(props => {
  return <BatteryHeartSvg {...props} />;
});
