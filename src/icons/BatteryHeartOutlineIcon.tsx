import React, { FC, memo } from 'react';
import BatteryHeartOutlineSvg from '../svg/battery-heart-outline.svg';

export interface IBatteryHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryHeartOutlineIcon: FC<IBatteryHeartOutlineIconProps> = memo(props => {
  return <BatteryHeartOutlineSvg {...props} />;
});
